let botonGirar = document.querySelector('.btn');
let imgGirar = document.getElementById('girando')
botonGirar.addEventListener('click', rotar);


numero = 0;
function rotar (){
    imgGirar.style.transform = `rotate(${numero += -60}deg)`;
}

// ------- cambiar imagen -----

let imagenGirar = document.querySelector('.animacion');
let yo = document.querySelector('.yo');
let esqueleto = document.querySelector('.esqueleto');

imagenGirar.addEventListener('click', cambiar);

function cambiar () {
    yo.classList.toggle('ocultado');
    esqueleto.classList.toggle('ocultado')
}