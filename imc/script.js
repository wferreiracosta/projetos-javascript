const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valor = (peso / (altura * altura)).toFixed(1);

        let classificacao = ''
        let obesidade = ''

        if (valor < 18.5) {
            classificacao = 'MAGREZA'
            obesidade = '0'
        } else if (valor >= 18.5 && valor <= 24.9) {
            classificacao = 'NORMAL'
            obesidade = '0'
        } else if (valor >= 25 && valor <= 29.9) {
            classificacao = 'SOBREPESO'
            obesidade = 'I'
        } else if (valor >= 30 && valor < 39.9) {
            classificacao = 'OBESIDADE'
            obesidade = 'II'
        } else {
            classificacao = 'OBESIDADE GRAVE'
            obesidade = 'III'
        }

        resultado.textContent = `IMC: ${valor} Classificação: ${classificacao} Obesidade: ${obesidade}`
    } else {
        resultado.textContent = `Preencha todos os campos!!!`
    }

}

calcular.addEventListener('click', calcularIMC);