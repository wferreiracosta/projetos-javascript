const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    resultado.textContent = `Nome: ${nome} Altura: ${altura} Peso: ${peso}`
}

calcular.addEventListener('click', calcularIMC);