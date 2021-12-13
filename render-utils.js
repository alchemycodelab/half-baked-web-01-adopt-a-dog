export function renderDogCard(dog) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('dog-card');

    p.textContent = dog.name;
    img.src = `./assets/${dog.breed}.jpeg`;
    a.href = '' // link to the dog's detail page here
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderDogDetail(dog) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const ageAndBreedEl = document.createElement('div');

    div.classList.add('dog-detail');

    nameEl.textContent = dog.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = dog.description;
    descriptionEl.classList.add('description');

    ageEl.textContent = `${dog.age} years old`;    
    ageEl.classList.add('age');

    breedEl.textContent = dog.breed;
    breedEl.classList.add('breed');

    ageAndBreedEl.classList.add('age-and-breed');

    ageAndBreedEl.append(ageEl, breedEl);

    img.src = `../assets/${dog.breed}.jpeg`;
    
    div.append(nameEl, img, ageAndBreedEl, descriptionEl);

    return div;

}
