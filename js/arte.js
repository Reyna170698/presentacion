var audio = document.getElementById("horror");
audio.controls = false;
var off = document.getElementById("speakeroff");
var speakerOn = document.getElementById("speakeron");

function pause() {
    var pause = document.getElementById("pause");
    var x = document.getElementById("speakeron");
    if (audio.paused || audio.ended) {
        //pause.title = "pause";
        pause.style.display = "none"
        x.style.display = "block";
        audio.play();
    } else {
        //playpause.title = "play";
        pause.style.display = "block"
        x.style.display = "none";
        audio.pause();
    }
}

const preguntasArte= [
    {
        pregunta: '¿Quién escribió "La Metamorfosis"?',
        respuesta: {
            a: "Dante Alighieri",
            b: "Frank Kafka",
            c: "Fiódor Dostoyevski"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Quién pintó la Gioconda?",
        respuesta: {
            a: "Leonardo DaVinci",
            b: "Miguel Angel",
            c: "Pablo Picasso"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Qué nacionalidad tiene Frida Kalo?",
        respuesta: {
            a: "Mexicana",
            b: "Argentina",
            c: "Italiana"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Cuál es el séptimo arte?",
        respuesta: {
            a: "Teatro",
            b: "Danza",
            c: "Cine"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuál es el quinto libro de Harry Potter?",
        respuesta: {
            a: "La Piedra Filosofal",
            b: "La Orden del Fenix",
            c: "El Caliz de Fuego"
        },
        respuestacorrecta: "b"
    },
]

var i=0;
var vidas = 3;
var vivo = true;
var pBar = document.getElementById("progressBar");
var preguntasLol = document.getElementById("bloquePreg");

function activatePreg() {
    preguntasLol.style.display = "block";
}

function validar (respuestaElegida){
    if (i<5){
        if (respuestaElegida==preguntasArte[i].respuestacorrecta){
            i=i+1;
            preguntasLol.style.display = "none"
            siguientePregunta (i);
        }
        else {
            vidas = vidas - 1;
            pBar.value = parseInt(pBar.value) - 1;
            //mostrarVidas();
            
            if (vidas == 0){
                vivo = false;
                //
                var jumpScare = document.getElementById("jumpscare");
                document.getElementById("scream").play();
                jumpScare.style.display = "block";
                alert.jumpScare.src;
                //alert ("Game Over!!");
                /* vidas= 3;
                i=0;
                siguientePregunta (i); */
            }
            else{
                document.getElementById("alert").play();
                alert("¡Cuidado! ELLA ESTÁ CERCA");
                //alert ("Te queda(n) " + vidas + " vida(s)")
            }
        }
    }
    else if (vivo = true){
        //alert ("YOU WIN");
        var flecha = document.getElementById("flecha");
        flecha.style.display = "block"
    }
}

window.onload = function(){
    document.getElementById("preguntas").innerHTML = preguntasArte[i].pregunta;
    document.getElementById("respuestaA").innerHTML=preguntasArte[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML=preguntasArte[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML=preguntasArte[i].respuesta.c;
    mostrarVidas();
}

function siguientePregunta(i){
    document.getElementById("preguntas").innerHTML=preguntasArte[i].pregunta;
    document.getElementById("respuestaA").innerHTML=preguntasArte[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML=preguntasArte[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML=preguntasArte[i].respuesta.c;
    mostrarVidas();
}