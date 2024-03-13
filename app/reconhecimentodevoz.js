window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute = document.getElementsByClassName('body-numero')[0];

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const numero = e.results[0][0].transcript;
    exibirNumero(numero);
    verificaSeOChutePossuiUmValorValido(numero); 
}

function exibirNumero(numero){
    elementoChute.value= numero;
}

recognition.addEventListener('end', () => recognition.start())