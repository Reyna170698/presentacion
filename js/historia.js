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

        if (respuestaElegida == preguntasHistoria[i].respuestacorrecta) {
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



const preguntasHistoria = [{
        pregunta: "¿Quién liberó a Argentina, Chile y Perú?",
        respuesta: {
            a: "Ernesto Che Guevara",
            b: "José de San Martín",
            c: "Simón Bolívar"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Maria Antonieta fue reina de qué país?",
        respuesta: {
            a: "Francia",
            b: "Países Bajos",
            c: "Reino Unido"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Cuál era el nombre de pila de Lenin?",
        respuesta: {
            a: "Lósif",
            b: "Aleksandr",
            c: "Vladimir"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuáles son los principios del Derecho?",
        respuesta: {
            a: "Igualdad y Seguridad",
            b: "Equidad y Justicia",
            c: "Seguridad y Rectitud"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Qué significan las siglas FARC?",
        respuesta: {
            a: "Fortaleza Armada Rudimentaria Cordillera",
            b: "Fiscalía Alemana Radical de Colonia",
            c: "Fuerzas Armadas Revolucionarias de Colombia"
        },
        respuestacorrecta: "c"
    },
]


window.onload = function() {

    document.getElementById("preguntas").innerHTML = preguntasHistoria[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasHistoria[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasHistoria[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasHistoria[i].respuesta.c;
}

function siguientePregunta(i) {
    document.getElementById("preguntas").innerHTML = preguntasHistoria[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasHistoria[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasHistoria[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasHistoria[i].respuesta.c;
}