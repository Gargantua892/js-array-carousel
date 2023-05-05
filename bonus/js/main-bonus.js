// dichiarazione di un array per lo storage delle immagini
let arrayOfImages = [];
let activeItem = 0;

//definizione costanti per frecce di navigazione
const topArrow = document.getElementById("top-arrow");
const bottomArrow = document.getElementById("bottom-arrow");
const thumbContainer = document.getElementById("thumbnail-container");
console.log(thumbContainer);




// Mettiamo il path delle immagini nell'arrayOfImages
arrayOfImages.push('./img/01.webp');
arrayOfImages.push('./img/02.webp');
arrayOfImages.push('./img/03.webp');
arrayOfImages.push('./img/04.webp');
arrayOfImages.push('./img/05.webp');

//dichiarazione costante per lo slider container
const  sliderContainer = document.getElementById('slider-container');

//ciclo per creare dinamicamente gli slider items
for(let i = 0; i < arrayOfImages.length; i++){

    //creazione div per slider item
    let element = document.createElement('div');
    let thumb = document.createElement('div');

    //aggiunta classe per slider item
    element.classList.add("slider-item");

        //aggiunta classe per slider thumb
        thumb.classList.add("slider-thumb", "overlay");


        //append slider thumb
        thumbContainer.append(thumb);


    //append slider item
    sliderContainer.append(element);

    //inserimento immagini nello slider item
    element.innerHTML = `<img src="${arrayOfImages[i]}" alt="">`;
    thumb.innerHTML = `<img src="${arrayOfImages[i]}" alt="">`;

}


//dichiaro la variabile items per selezionare la classe di tutti gli elementi slider-items
let items = document.querySelectorAll(".slider-item");
let thumbItems = document.querySelectorAll(".slider-thumb");

//attribuisco la classe active all'indice 0 dell'array
// items[activeItem].classList.add("active");
// thumbItems[activeItem].classList.remove("overlay");

//Dichiaro in due variabili i bottoni per comandare lo slider
let prev = document.getElementById("top-arrow");
let next = document.getElementById("bottom-arrow");

items[activeItem].classList.add("active");
thumbItems[activeItem].classList.toggle("overlay");

// //aggiunta event listner freccia di navigazione next
next.addEventListener("click", 
function(){
    items[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.toggle("overlay");

    if(activeItem == items.length -1){
    activeItem = 0;
    }
    else{
        activeItem++;
    }
    items[activeItem].classList.add("active");
    thumbItems[activeItem].classList.toggle("overlay");

});

// //aggiunta event listner freccia di navigazione prev
prev.addEventListener("click", 
function(){
    items[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.toggle("overlay");

    if(activeItem == 0){
    activeItem = items.length -1;
    }
    else{
        activeItem--;
    }
    items[activeItem].classList.add("active");
    thumbItems[activeItem].classList.toggle("overlay");

});
    

// items[activeItem].classList.remove("active");
// thumbItems[activeItem].classList.toggle("overlay");

// //esecuzione condizionale per verificare se resettare lo slider o no
// if(activeItem == items.length){
//     activeItem = 0;
// }
// else{
//     activeItem++;
// }







