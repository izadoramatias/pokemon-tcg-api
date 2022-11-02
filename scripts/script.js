fetch('https://api.pokemontcg.io/v2/cards', {
    method: 'GET',
    headers: {
        'X-Api-Key': '82c643d2-1c15-47c2-91e1-af7829a97d1f' 
    }
})
.then((response) => response.json())
.then((data) => {

    const cardsContainer = document.querySelector('.container .content')

    data.data.forEach(element => {
        let pokeImage = element.images.large
        let pokeName = element.name
        let pokeType = element.types
        let pokeId = element.id 

        cardsContainer.innerHTML += 
        `<div class="card" id="${pokeId}">
            <div class="poke__image">
                <img src="${pokeImage}" alt="${pokeName}">
            </div>
            <div class="content__card">
                <h2 class="poke__name">${pokeName}</h2>
                <p class="poke__type">${pokeType}</p>
            </div>
        </div>`
        
    });
})

VanillaTilt.init(document.querySelector(".expanded__card > img"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 1
});

let expandedCard = document.querySelector('.expanded__card')
let expandedCardImg = document.querySelector('.expanded__card img')

document.addEventListener('click', (e) => {

    if((e.target).tagName.toLowerCase() === 'img' && (e.target).parentElement.getAttribute('class') === 'poke__image') {
        const clickedElement = e.target;
        expandedCardImg.setAttribute('src', clickedElement.getAttribute('src'))
        expandedCard.classList.add('show')
    }

})

let closeCardButton = document.querySelector(".expanded__card .close__card")
closeCardButton.addEventListener('click', () => {
    expandedCard.classList.remove('show')
})
