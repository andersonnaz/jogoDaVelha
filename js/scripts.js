var tabuleiro = [];
var jogadorDaVez; //0 - player1 / 1 - player2
var qtdJogadas = 9;

for(let i = 0; i < 9; i++){
    tabuleiro[i] = -1;
}

function ganhouPartida(){
    if((tabuleiro[0] == tabuleiro[1]) && (tabuleiro[0] == tabuleiro[2])){
        if(tabuleiro[0] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[3] == tabuleiro[4]) && (tabuleiro[3] == tabuleiro[5])){
        if(tabuleiro[3] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[3] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[6] == tabuleiro[7]) && (tabuleiro[6] == tabuleiro[8])){
        if(tabuleiro[6] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[6] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[0] == tabuleiro[3]) && (tabuleiro[0] == tabuleiro[6])){
        if(tabuleiro[0] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[1] == tabuleiro[4]) && (tabuleiro[1] == tabuleiro[7])){
        if(tabuleiro[1] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[1] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[2] == tabuleiro[5]) && (tabuleiro[2] == tabuleiro[8])){
        if(tabuleiro[2] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[2] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[0] == tabuleiro[4]) && (tabuleiro[0] == tabuleiro[8])){
        if(tabuleiro[0] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[0] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    if((tabuleiro[2] == tabuleiro[4]) && (tabuleiro[2] == tabuleiro[6])){
        if(tabuleiro[2] == 0){
            setTimeout(function(){alert("jogador1 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
        if(tabuleiro[2] == 1){
            setTimeout(function(){alert("jogador2 GANHOU A PARTIDA!!"); }, 500);
            setTimeout(function(){reiniciar(); }, 500);
        }
    }
    empate();
}

function placar(){
    
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
}

function qtdJogadores(qtd){
    if(qtd == 1){

    }
    if(qtd == 2){
        document.getElementById("btnIniciar").disabled = false;
    }
}

function iniciar(){
    jogadorDaVez = 0;
    document.getElementById("btnReiniciar").disabled = false;
    document.getElementById("btnIniciar").disabled = true;
    for(let i=0; i<9; i++){
        document.getElementById("posicao" + i).onclick = function(){jogada(i)};
    }
    //document.getElementById("nomeJogador1").disabled = false;
    //document.getElementById("nomeJogador2").disabled = false;
}

function bloquearBotoes(){
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnReiniciar").disabled = true;
    for(let i=0; i<9; i++){
        document.getElementById("posicao" + i).onclick = false;
    }
    //document.getElementById("nomeJogador1").disabled = true;
    //document.getElementById("nomeJogador2").disabled = true;
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






