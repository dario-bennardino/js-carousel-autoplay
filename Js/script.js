// //DATI AUTOPLAY
// let currentIndex = 0;
// const totalItems = 5;
// const intervalTime = 2000;

//  // Funzione per aggiornare il percorso dell'immagine
// function showItem(index) {
//     img.src = `img/${index + 1}.webp`;
// }

// //Funzione passare ad immagine successiva
// function nextSlide() {
//     currentIndex = currentIndex + 1;

//     if (currentIndex >= totalItems) {
//         currentIndex = 0;
//     }

//     showItem(currentIndex);
// }

// // Funzione per l'autoplay
// function startAutoplay() {
//     // Utilizzo setInterval per richiamare la funzione nextSlide ad intervalli regolari
//     setInterval(nextSlide, intervalTime);
// }

// // Autoplay
// startAutoplay();


//Inserisco tutti i prcorsi delle immagini in un array
// console.log('avvio');

const itemsWrapper = document.querySelector('.items-wrapper');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

//nascondo il bottone btnDown di default
btnDown.classList.add('hide')


let counterImg = 0;


const images = [ 
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

//creo ciclo delle immagini e ad ogni ciclo aggiungo il tag con l'immagine
for(let i = 0; i < images.length; i++){
    const img = images[i];
   itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
    
}

//prendo tutti gli elementi con la classe img
const itemsCollection = document.getElementsByClassName('img');

//mi restituisce un html collection ovvero array che come elemento ha un elemento html 
// console.log(itemsCollection);
//se seleziono il primo
// console.log(itemsCollection[0]);


//al primo elemento tolgo la classe hide tramite remuve
itemsCollection[counterImg].classList.remove('hide')

//al click delle frecce incremento o decremento il counter 

//BOTTONE btnDown
btnDown.addEventListener('click', function(){
    btnUp.classList.remove('hide')

//rimetto la classe hide all'elemento con l'indice attuale che si incrementa o si decrementa
itemsCollection[counterImg--].classList.add('hide')

if(counterImg === 0){
    btnDown.classList.add('hide')
}

//tolgo la classe hide all'elemento a indice contatore che si è incrementato o decrementato
itemsCollection[counterImg].classList.remove('hide')
})

//BOTTONE btnUp
btnUp.addEventListener('click', function(){

    btnDown.classList.remove('hide')

    //rimetto la classe hide all'elemento con l'indice attuale che si incrementa o si decrementa
    itemsCollection[counterImg++].classList.add('hide')

    //tolgo la classe hide all'elemento a indice contatore che si è incrementato o decrementato
    itemsCollection[counterImg].classList.remove('hide')

    console.log(counterImg);

    if(counterImg === images.length - 1){
    btnUp.classList.add('hide')
    }


})

