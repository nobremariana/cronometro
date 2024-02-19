"use strict"

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cron;

// inicia o temporizador
function start() {
    cron = setInterval(() => {
        timer();
    }, tempo);

}

// para o temporizador mas nao limpa as variaves
function pause() {
    clearInterval(cron);
}

// para o temporizador e limpa as variaveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
document.getElementById("counter").innerText = "00:00:00";
}

function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}