/**
 * Consegna:
    Scrivi un programma che stampi in console i numeri da 1 a 100:
    ma che per i multipli di 3 stampi “Fizz” al posto del numero e
    per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    HOW TO DO:
    1. Scrivere con FOR stampa numeri da 1 a 100 e mostrarli nella console;
        1.1 SE un numero è multiplo di 3 ==> mostrare nella console 'Fizz';
        1.2 SE un numero è multiplo di 5 ==> mostrare nella console 'Buzz';
        1.3 SE un numero è sia multiplo di 3 che di 5 ==> mostrare nella console 'FizzBuzz';
 */

const div = document.getElementById('box');
const ul = document.createElement('ul');
div.append(ul);

ul.className = "list-style";
ul.classList.add("list-style");

const title = document.querySelector('header h1');
title.className = "color-red";
title.classList.add("color-red");

for (let i = 1; i <= 100; i++){

    let element = `<li class="color-orange padding">${i}</li>`;
    
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log('FizzBuzz');
        element = `<li class="color-green padding">FizzBuzz</li>`;
    } else if (i % 3 === 0){
        console.log('Fizz');
        element = `<li class="color-magenta padding">Fizz</li>`;
    } else if (i % 5 === 0) {
        console.log('Buzz');
        element = `<li class="color-cyan padding">Buzz</li>`;
    } else {
        console.log(i);
    }; 

    ul.innerHTML += element;
};
