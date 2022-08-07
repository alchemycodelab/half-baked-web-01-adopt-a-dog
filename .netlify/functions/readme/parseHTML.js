const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'README.md');
console.log(__dirname);
const parseHTML = async () => {
    let html = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Alchemy Code Lab</title>
      </head>

      <body>
      `;

    const data = await fs.promises.readFile('README.md', 'utf-8');
    const nodes = data.split('\n');
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        node = node
            .replace(/\[([^\]]+)\]\(([^\)]+)\)/, '<a href="$2">$1</a>')
            .replace(/\*\*(.*)\*\*/, '<b>$1</b>')
            .replace(/\*(.*)\*/, '<i>$1</i>');

        if (node.startsWith('###')) {
            html = html + `<h3>${node.slice(4)}</h3>`;
        } else if (node.startsWith('##')) {
            html = html + `<h2>${node.slice(3)}</h2>`;
        } else if (node.startsWith('#')) {
            html = html + `<h1>${node.slice(2)}</h1>`;
        } else if (node.startsWith('|')) {
            if (!node.startsWith('| --')) {
                const cells = node
                    .split('|')
                    .filter((cell) => cell.length > 0)
                    .map((cell) => `<td>${cell}</td>`);
                // table header
                if (nodes[i + 1].startsWith('| --')) {
                    html = html + '<table><th><tr>' + cells.join('') + '</tr></th>';
                } else {
                    html = html + '<tr>' + cells.join('') + '</tr>';
                }
            }
            if (!nodes[i + 1].startsWith('|')) {
                html = html + '</table>';
            }
        } else if (node.startsWith('-') || node.startsWith('*')) {
            if (!nodes[i - 1].startsWith('-') && !nodes[i - 1].startsWith('*')) {
                html = html + '<ul>';
            }
            html = html + `<li>${node.slice(2)}</li>`;
            if (!nodes[i + 1].startsWith('-') && !nodes[i + 1].startsWith('*')) {
                html = html + '</ul>';
            }
        } else {
            html = html + `<p>${node}</p>`;
        }
    }
    html = html + '</body></html>';
    return html;
};
parseHTML();
module.exports = { parseHTML };
