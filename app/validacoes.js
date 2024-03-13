function verificaSeOChutePossuiUmValorValido(numero) {
    const numeroInteiro = parseInt(numero);
    const elementoChute = document.getElementsByClassName('body-numero')[0];

    if (chuteForInvalido(numeroInteiro)) {
        if (numero.toString().toUpperCase() === "JOGO FINALIZADO") {
            document.body.innerHTML = `<div class="body-certo">
            <h2 class="certo-titulo">Jogo finalizado!</h2><br>
            <h3 class="certo-subtitulo">O número secreto era ${numeroSecreto}</h3>
            <button id="playButton" class= "body-button">Jogar<br>de novo</button>
            </div>`;} else {
        elementoChute.value = 'Valor inválido';
        return;
    }}

    if (numeroForMaiorOuMenorQueOValorPermitido(numeroInteiro)) {
        elementoChute.value = `Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`;
        return;
    }

    if (numeroInteiro === numeroSecreto) {
        document.body.innerHTML = `<div class="body-certo">
        <h2 class="certo-titulo">Você acertou!</h2><br>
        <h3 class="certo-subtitulo">O número secreto era ${numeroSecreto}</h3>
        <button id="playButton" class= "body-button">Jogar<br>de novo</button>
        </div>`;
    } else if (numeroInteiro < numeroSecreto) {
        document.getElementById('dicas').textContent = "O número secreto é maior ↑";
    } else {
        document.getElementById('dicas').textContent = "O número secreto é menor ↓";
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id =='playButton'){
        window.location.reload()
    }
})


