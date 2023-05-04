// dichiarazione di un array per lo storage delle immagini
let arrayOfImages = [];

let activeItem = 0;

// Mettiamo il path delle immagini nell'arrayOfImages
arrayOfImages.push('./img/01.webp');
arrayOfImages.push('./img/02.webp');
arrayOfImages.push('./img/03.webp');
arrayOfImages.push('./img/04.webp');
arrayOfImages.push('./img/05.webp');

//dichiarazione costante per lo slider container
const  sliderContainer = document.getElementById('slider-container');

//ciclo per creare dinamicamente gli slider items
for(let i = 0; i <= arrayOfImages.length - 1; i++){

    //creazione div per slider item
    let element = document.createElement('div');

    //aggiunta classe per slider item
    element.classList.add("slider-item");

    //append slider item
    sliderContainer.append(element);

    if(i === 0 && activeItem === 0){
        element.classList.add("active");
    }

    //inserimento immagini nello slider item
    element.innerHTML = `<img src="${arrayOfImages[i]}" alt="">`;



}


