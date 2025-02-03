let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos 2 amigos para realizar el sorteo.');
        return;
    }

    let amigosParaSortear = [...amigos];
    let resultados = [];

    while (amigosParaSortear.length > 0) {
        const indiceAmigo = Math.floor(Math.random() * amigosParaSortear.length);
        const amigoSecreto = amigosParaSortear.splice(indiceAmigo, 1)[0];
        const amigoAsignado = amigosParaSortear.length > 0 ? amigosParaSortear[0] : resultados[0].amigo;
        resultados.push({ amigo: amigoSecreto, amigoSecreto: amigoAsignado });
    }

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    resultados.forEach((resultado) => {
        const li = document.createElement('li');
        li.textContent = `${resultado.amigo} ➔ ${resultado.amigoSecreto}`;
        resultadoElement.appendChild(li);
    });
}