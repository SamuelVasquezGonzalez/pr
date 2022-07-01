let frases = [
    {
        nota: "No estoy en peligro, Skyler. ¡YO SOY el peligro!",
        autor: "Walter White"
    },
    {
        nota: "Un tipo abre la puerta y recibe un disparo y ¿piensas eso de mí? No. ¡Soy yo quien toca!",
        autor: "Walter White"
    },
    {
        nota: "¡Sí, perra! ¡Imanes!",
        autor: "Jesse Pinkman"
    },
    {
        nota: " ¡Perra! ",
        autor: "Jesse Pinkman"
    },
    {
        nota: "Ahora, oye, recuerda, no todo el aprendizaje proviene de los libros",
        autor: "Jesse Pinkman"
    },
    {
        nota: "¿Acabas de traer una bomba a un hospital?",
        autor: "Jesse Pinkman"
    },
    {
        nota: "¡Mejor llama a Saúl!",
        autor: "Saul Goodman"
    },
    {
        nota: "Ustedes dos apestan traficando metanfetamina.",
        autor: "Saul Goodman"
    },
];

let contenedor = document.querySelector('.bbmensajes');
let mensaje = document.querySelector('.mensaje');
let autor = document.querySelector('.autor');

let random = Math.round(Math.random()*7)
console.log(random)
console.log(frases[random])
mensaje.innerHTML = frases[random].nota
autor.innerHTML = frases[random].autor

window.addEventListener('load', ()=>{
    contenedor.style.left = '0px';
    setTimeout(() => {
        contenedor.style.left = '-400px';
    }, 5000);
});