const menorNumero = 1
const maiorNumero = 100
const numeroAleatorio = sorteioNumero()

function sorteioNumero(){
    return parseInt(Math.random() * maiorNumero + 1)
}

const alteraMenorValor = document.getElementById('menor-valor')
alteraMenorValor.innerHTML = menorNumero

const alteraMaiorValor = document.getElementById('maior-valor')
alteraMaiorValor.innerHTML = maiorNumero

console.log(numeroAleatorio)
