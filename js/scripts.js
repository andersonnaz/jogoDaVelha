var tabuleiro = [];
var vetorPlacar = [0,0];
var jogadorDaVez; //0 - player1 / 1 - player2
var qtdJogadas = 9;
var qtdJogadores;

for(let i = 0; i < 9; i++){
    tabuleiro[i] = -1;
}

function ganhouPartida(){
    if((tabuleiro[0] == tabuleiro[1]) && (tabuleiro[0] == tabuleiro[2])){
        if(tabuleiro[0] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[3] == tabuleiro[4]) && (tabuleiro[3] == tabuleiro[5])){
        if(tabuleiro[3] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[3] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[6] == tabuleiro[7]) && (tabuleiro[6] == tabuleiro[8])){
        if(tabuleiro[6] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[6] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[0] == tabuleiro[3]) && (tabuleiro[0] == tabuleiro[6])){
        if(tabuleiro[0] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[1] == tabuleiro[4]) && (tabuleiro[1] == tabuleiro[7])){
        if(tabuleiro[1] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[1] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[2] == tabuleiro[5]) && (tabuleiro[2] == tabuleiro[8])){
        if(tabuleiro[2] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[2] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[0] == tabuleiro[4]) && (tabuleiro[0] == tabuleiro[8])){
        if(tabuleiro[0] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[2] == tabuleiro[4]) && (tabuleiro[2] == tabuleiro[6])){
        if(tabuleiro[2] == 0){
            placar(0);
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[2] == 1){
            placar(1);
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    empate();
}

function placar(jogador){
    if(jogador == 0){
        vetorPlacar[0]++;
        document.getElementById("scoreJogador1").innerHTML = vetorPlacar[0];
    }
    if(jogador == 1){
        vetorPlacar[1]++;
        document.getElementById("scoreJogador2").innerHTML = vetorPlacar[1];
    }
    if(vetorPlacar[0] > vetorPlacar[1]){
        document.getElementById("scoreJogador1").style.color = "#00f";
        document.getElementById("scoreJogador2").style.color = "#f00";
    }
    if(vetorPlacar[0] < vetorPlacar[1]){
        document.getElementById("scoreJogador1").style.color = "#f00";
        document.getElementById("scoreJogador2").style.color = "#00f";
    }
}

function empate(){
    var empatou = true;
    for(let i = 0; i < 9; i++){
        if(tabuleiro[i] == -1){
            empatou = false;
        }
    }
    if(empatou){
      setTimeout(function(){alert("A PARTIDA EMPATOU"); }, 500);
      setTimeout(function(){reiniciar(); }, 500);
    }
}

function posicaoRandom(){
    let posicaoRandom;
    do {
        posicaoRandom = Math.floor(Math.random() * 9);
    } while (tabuleiro[posicaoRandom] != -1);
    return posicaoRandom;
}

function contraMaquina(){
    if(qtdJogadas == 8){
        if (tabuleiro[0] == 0 || tabuleiro[2] == 0 || tabuleiro[6] == 0 || tabuleiro[8] == 0) {
            setTimeout(function(){document.getElementById("posicao" + 4).style.backgroundImage = "url('imgs/o.png')"; }, 200);
            tabuleiro[4] = 1;
            jogadorDaVez = 0;
            qtdJogadas--;
        }else{
            let pos = posicaoRandom();
            setTimeout(function(){document.getElementById("posicao" + pos).style.backgroundImage = "url('imgs/o.png')"; }, 200);
            tabuleiro[pos] = 1;
            jogadorDaVez = 0;
            qtdJogadas--;
        }
    }
    if(qtdJogadas == 6){
        if (tabuleiro[0] == 0 && tabuleiro[1] == 0) {
            setTimeout(function(){document.getElementById("posicao" + 2).style.backgroundImage = "url('imgs/o.png')"; }, 200);
            tabuleiro[2] = 1;
            jogadorDaVez = 0;
            qtdJogadas--;
        } else {
            if (tabuleiro[0] == 0 && tabuleiro[3] == 0) {
                setTimeout(function(){document.getElementById("posicao" + 6).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                tabuleiro[6] = 1;
                jogadorDaVez = 0;
                qtdJogadas--;
            } else {
                if (tabuleiro[0] == 0 && tabuleiro[2] == 0) {
                    setTimeout(function(){document.getElementById("posicao" + 1).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                    tabuleiro[1] = 1;
                    jogadorDaVez = 0;
                    qtdJogadas--;
                } else {
                    if (tabuleiro[0] == 0 && tabuleiro[6] == 0) {
                        setTimeout(function(){document.getElementById("posicao" + 3).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                        tabuleiro[3] = 1;
                        jogadorDaVez = 0;
                        qtdJogadas--;
                    } else {
                        if (tabuleiro[1] == 0 && tabuleiro[2] == 0) {
                            setTimeout(function(){document.getElementById("posicao" + 0).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                            tabuleiro[0] = 1;
                            jogadorDaVez = 0;
                            qtdJogadas--;
                        } else {
                            if (tabuleiro[2] == 0 && tabuleiro[5] == 0) {
                                setTimeout(function(){document.getElementById("posicao" + 8).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                                tabuleiro[8] = 1;
                                jogadorDaVez = 0;
                                qtdJogadas--;
                            } else  {
                                if (tabuleiro[8] == 0 && tabuleiro[5] == 0) {
                                    setTimeout(function(){document.getElementById("posicao" + 2).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                                    tabuleiro[2] = 1;
                                    jogadorDaVez = 0;
                                    qtdJogadas--;
                                } else {
                                    if (tabuleiro[8] == 0 && tabuleiro[7] == 0) {
                                        setTimeout(function(){document.getElementById("posicao" + 6).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                                        tabuleiro[6] = 1;
                                        jogadorDaVez = 0;
                                        qtdJogadas--;
                                    } else {
                                        let pos = posicaoRandom();
                                        setTimeout(function(){document.getElementById("posicao" + pos).style.backgroundImage = "url('imgs/o.png')"; }, 200);
                                        tabuleiro[pos] = 1;
                                        jogadorDaVez = 0;
                                        qtdJogadas--;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (qtdJogadas == 4) {
        let pos = posicaoRandom();
        setTimeout(function(){document.getElementById("posicao" + pos).style.backgroundImage = "url('imgs/o.png')"; }, 200);
        tabuleiro[pos] = 1;
        jogadorDaVez = 0;
        qtdJogadas--;
    }
    if (qtdJogadas == 2) {
        let pos = posicaoRandom();
        setTimeout(function(){document.getElementById("posicao" + pos).style.backgroundImage = "url('imgs/o.png')"; }, 200);
        tabuleiro[pos] = 1;
        jogadorDaVez = 0;
        qtdJogadas--;
    }
    
}

function jogada(posicao){
    console.log(posicao);
    if(tabuleiro[posicao] == -1){    
        qtdJogadas--;
        if(qtdJogadas >= 0){
            if(jogadorDaVez == 0){            
                document.getElementById("posicao" + posicao).style.backgroundImage = "url('imgs/x.png')";
                tabuleiro[posicao] = 0;
                jogadorDaVez = 1;
            }else{
                document.getElementById("posicao" + posicao).style.backgroundImage = "url('imgs/o.png')";
                tabuleiro[posicao] = 1;
                jogadorDaVez = 0;
            }     
        }
        console.log(qtdJogadas);
        console.log(tabuleiro);
    }
    ganhouPartida();
    if (qtdJogadores == 1) {
        contraMaquina();
    }
}

function funcaoQtdJogadores(qtd){
    if(qtd == 1){
        document.getElementById("btnIniciar").disabled = false;
        document.getElementById("inputJogador1").disabled = false;
        qtdJogadores = 1;
    }
    if(qtd == 2){
        document.getElementById("btnIniciar").disabled = false;
        document.getElementById("inputJogador1").disabled = false;
        document.getElementById("inputJogador2").disabled = false;
    }
}

function iniciar(){
    jogadorDaVez = 0;
    document.getElementById("btnReiniciar").disabled = false;
    document.getElementById("btnIniciar").disabled = true;
    for(let i=0; i<9; i++){
        document.getElementById("posicao" + i).onclick = function(){jogada(i)};
    }
    if (qtdJogadores == 1) {
        document.getElementById("outputJogador2").innerHTML = "Maquina";
    } else {
        document.getElementById("outputJogador1").innerHTML = document.getElementById("inputJogador1").value;
        document.getElementById("outputJogador2").innerHTML = document.getElementById("inputJogador2").value;
    }
    
}

function bloquearBotoes(){
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnReiniciar").disabled = true;
    for(let i=0; i<9; i++){
        document.getElementById("posicao" + i).onclick = false;
    }
    document.getElementById("inputJogador1").disabled = true;
    document.getElementById("inputJogador2").disabled = true;
}

function reiniciar(){
    for(let i = 0; i < 9; i++){
        tabuleiro[i] = -1;
        document.getElementById("posicao"+i).style.backgroundImage = "";
    }
    qtdJogadas = 9;
    jogadorDaVez = 0;
}

document.getElementById("btnIniciar").addEventListener("click", iniciar);
document.getElementById("btnReiniciar").addEventListener("click", reiniciar);
window.addEventListener("load", bloquearBotoes);






