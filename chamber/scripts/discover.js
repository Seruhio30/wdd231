import { places } from "../../data/places.mjs";
console.log(places);


const showHere = document.querySelector("#places");
function displayItems(places) {
    places.forEach(element => {
        const card = document.createElement('div');
        const placeimg = document.createElement('img');
        placeimg.src = `images/${element.image_url}`;
        placeimg.alt = element.name;
        placeimg.width = 300;
        placeimg.height = 200;
        card.appendChild(placeimg);

        const title = document.createElement('h2');
        title.innerText = element.name;
        card.appendChild(title);

        const address = document.createElement('address');
        address.innerText = element.address;
        card.appendChild(address);

        const description = document.createElement('p');
        description.innerText = element.description;
        card.appendChild(description);

        showHere.appendChild(card);

    });
}
displayItems(places);


