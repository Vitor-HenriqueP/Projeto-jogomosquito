let altura= 0
let largura = 0
let vidas = 1
let tempo = 15
let criaMosquitoTempo= 1500
let nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}
else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}
else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura= window.innerWidth
}
ajustaTamanhoPalco()