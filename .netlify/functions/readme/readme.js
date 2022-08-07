const { parseHTML } = require('./parseHTML.js');

const handler = async () => {
    const html = await parseHTML();
    try {
        return {
            statusCode: 200,
            body: html,
            headers: {
                'Content-Type': 'text/html',
            },
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };
