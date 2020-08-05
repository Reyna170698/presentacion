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

var i = 0;
var vidas = 3;
var vivo = true;
var pBar = document.getElementById("progressBar");
var preguntasLol = document.getElementById("bloquePreg");

function validar(respuestaElegida) {
    if (i < 5) {

        if (respuestaElegida == entertainmentQ[i].respuestacorrecta) {
            i = i + 1;
            preguntasLol.style.display = "none"
            siguientePregunta(i);
        } else {
            vidas = vidas - 1;
            pBar.value = parseInt(pBar.value) - 1;
            if (vidas == 0) {
                vivo = false;
                var jumpScare = document.getElementById("jumpscare");
                document.getElementById("scream").play();
                jumpScare.style.display = "block";
                alert.jumpScare.src;
                vidas = 3;
                i = 0;
                siguientePregunta(i);
            } else {
                document.getElementById("alert").play();
                alert("¡Cuidado! ELLA ESTÁ CERCA");

            }
        }
    } else if (vivo = true) {
        var flecha = document.getElementById("flecha");
        flecha.style.display = "block"
    }
}


function activatePreg() {

    preguntasLol.style.display = "block";
}



const entertainmentQ = [{
        pregunta: "¿Cómo se llamaba el papá de Simba en El Rey León?",
        respuesta: {
            a: "Scar",
            b: "Pumba",
            c: "Mufasa"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuántos colores tiene un cubo de Rubik clásico?",
        respuesta: {
            a: "6",
            b: "4",
            c: "8"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Qué Beatle fue asesinado por un fan?",
        respuesta: {
            a: "Paul McCartney",
            b: "Ringo Starr",
            c: "Jonh Lennon"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuál es el nombre de la canción de la película Titanic?",
        respuesta: {
            a: "Bad Romance",
            b: "My Heart Will Go On",
            c: "Livin' On A Prayer"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Qué quería comerse Alf?",
        respuesta: {
            a: "A Willie",
            b: "Al gato",
            c: "A Bryan"
        },
        respuestacorrecta: "b"
    },
]


window.onload = function() {

    document.getElementById("preguntas").innerHTML = entertainmentQ[i].pregunta;
    document.getElementById("respuestaA").innerHTML = entertainmentQ[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = entertainmentQ[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = entertainmentQ[i].respuesta.c;
}

function siguientePregunta(i) {
    document.getElementById("preguntas").innerHTML = entertainmentQ[i].pregunta;
    document.getElementById("respuestaA").innerHTML = entertainmentQ[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = entertainmentQ[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = entertainmentQ[i].respuesta.c;
}