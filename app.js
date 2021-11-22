import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {
    // fetch all dogs
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
      // render the dog detail
        dogListContainer.append(dogEl);
    }
});