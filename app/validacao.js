function verificaChuteValido(chute){
    const numero = +chute

    if (Number.isNaN(numero)){
         elementoChute.innerHTML += '<div>Chute inválido</div>'
    }

   
    if (numero > maiorNumero || numero < menorNumero){
        elementoChute.innerHTML += `<div>Chute Inválido. Diga um número entre: ${menorNumero} e ${maiorNumero}</div>`
    }

    if (numero === numeroAleatorio){
        document.body.innerHTML = `
        <h2>Parabéns! Você acertou!
        <h3>O número secreto era ${numeroAleatorio}

        <div><button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button></div>
        ` 
    }else if(numero < numeroAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }else if(numero > numeroAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
