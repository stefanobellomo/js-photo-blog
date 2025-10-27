
function createCard(data) {

    data.forEach((thispolaroid) => {
    const cardEl = document.createElement('div')
    cardEl.classList.add('card-photo');

    const pinEl = document.createElement('img')
    pinEl.classList.add('pin')
    pinEl.src = './img/pin.svg'
    pinEl.alt = 'puntina'

    const imgEl = document.createElement('img')
    imgEl.classList.add('card-img')
    imgEl.src = thispolaroid.url
    imgEl.alt = thispolaroid.title

    const dateEl = document.createElement('p');
    dateEl.textContent = thispolaroid.date;
    dateEl.classList.add('font-type');

    const titleEl = document.createElement('h2');
    titleEl.textContent = thispolaroid.title;
    
    cardEl.append(pinEl, imgEl, dateEl, titleEl)
    rowCardsEl.append(cardEl)
})
}
const rowCardsEl = document.getElementById('row-cards')



fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {
    createCard(data)
})

