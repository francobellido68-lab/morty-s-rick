const contenedor = document.getElementById("contenedor");

let personajesGuardados = [];

async function obtenerPersonajes() {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const data = await respuesta.json();

        personajesGuardados = data.results;

        console.log(personajesGuardados);

        mostrar(personajesGuardados);

    } catch (error) {
        console.log(error);
    }
}

function mostrar(personajes) {
    let cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad de personajes: " + personajes.length;
    contenedor.appendChild(cantidad);

    for (let i = 0; i < personajes.length; i++) {
        let personaje = personajes[i];

        let tarjeta = document.createElement("div");

        let nombre = document.createElement("h2");
        nombre.textContent = personaje.name.toUpperCase();

        let imagen = document.createElement("img");
        imagen.src = personaje.image;

        let especie = document.createElement("p");
        especie.textContent = personaje.species;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(especie);

        contenedor.appendChild(tarjeta);
    }
}

obtenerPersonajes();