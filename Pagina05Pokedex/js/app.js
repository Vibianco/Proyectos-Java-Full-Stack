// Test rápido API
//
// const url = 'https://pokeapi.co/api/v2/pokemon/75/'
//
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     let element = document.getElementById('resultado')
//     resultado.innerHTML = `<p>${data.name}</p>
//     <img src='${data.sprites.front_default}'/>`;
//     console.log(data)
// })
// .catch(err=>console.log(err))

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const imgpoke = document.querySelector('#imgpoke');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarPokemon);
})

function buscarPokemon(e) {
    e.preventDefault();
 
    // Validar
    const pokemon = document.querySelector('#pokemon').value;
    pokenumber = parseInt(pokemon);

    if(pokemon === '') {
        // Hubo un error
        mostrarError('Debe completar el campo');
        return;
    }
    if(isNaN(pokenumber)){
        mostrarError('Debe ingresar un número');
        return;
    }
    if(pokenumber <= 0 || pokenumber > 893){
        mostrarError('Debe ingresar un número entre 1 y 893');
        return;
    }
    // Consultariamos la API
    consultarAPI(pokemon);
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta) {
        // Crear una alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center' );

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        // Se elimine la alerta después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(pokemon) {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

    Spinner(); // Muestra un Spinner de carga

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( datos => {

            console.log(datos);

            limpiarHTML(); // Limpiar el HTML previo

            if(datos.cod === "404") {
                mostrarError('Pokemon no encontrado')
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarPokemon(datos);
        })

}

function mostrarPokemon(datos) {

    const kilogramos = originalAKg(datos.weight);
    const metros = originalAMetros(datos.height);

    const numorden = document.createElement('p');
    numorden.textContent = `N° Pokémon: ${datos.id}`;
    numorden.classList.add('font-bold', 'text-2xl');

    const nombrepokemon = document.createElement('p');
    nombrepokemon.textContent = `${datos.name}`;
    nombrepokemon.classList.add('font-bold', 'text-6xl');

    const peso = document.createElement('p');
    peso.textContent = `Peso: ${kilogramos} kg`;
    peso.classList.add('font-bold', 'text-2x1');

    const altura = document.createElement('p');
    altura.textContent = `Altura: ${metros} m`;
    altura.classList.add('font-bold', 'text-2xl');

    const imagen = document.createElement('img');
    imagen.src = `${datos.sprites.front_default}`;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(numorden);
    resultadoDiv.appendChild(nombrepokemon);
    resultadoDiv.appendChild(altura);
    resultadoDiv.appendChild(peso);

    resultado.appendChild(resultadoDiv);

    imgpoke.appendChild(imagen);

}

const originalAKg = kilos => parseFloat(kilos / 10);
const originalAMetros = metro => parseFloat(metro / 10);

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
    while(imgpoke.firstChild){
        imgpoke.removeChild(imgpoke.firstChild);
    }
}

function Spinner() {

    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
    imgpoke.appendChild(divSpinner);
}

//Aleatorio
function generarAleatorio() {
    var aleatorio = Math.round(Math.random()*893);
    consultarAPI(aleatorio);}