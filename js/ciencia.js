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

const preguntasCiencia = [
    {
        pregunta: "¿Cómo se clasifican los animales con columna vertebral?",
        respuesta: {
            a:"Invertebrados",
            b:"Vertebrados",
            c:"Ambas"
        },
        respuestCorrecta: "b"
    },
    {
        pregunta: "¿Que utilizan los peces para respirar?",
        respuesta: {
            a:"Nariz",
            b:"Orejas",
            c:"Branqueas"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿El delfín es un pez o un mamífero?",
        respuesta: {
            a:"Pez",
            b:"Ambas",
            c:"Mamífero"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿Que animales no necesitan aparearse para reproducirse?",
        respuesta: {
            a:"Caballito de Mar",
            b:"Estrellas de Mar",
            c:"Peces en general"
        },
        respuestCorrecta: "a"
    },
    {
        pregunta: "¿Qué elemento representa Na en la Tabla Periódica?",
        respuesta: {
            a:"Sodio",
            b:"Ambas",
            c:"Sal"
        },
        respuestCorrecta: "b"
    },

]

var i = 0;
var vidas = 3;
var vivo = true;
var pBar = document.getElementById("progressBar");
var preguntasLol = document.getElementById("bloquePreg");

function activatePreg() {

    preguntasLol.style.display = "block";
}

function validar(respuestaElegida) {
    if (i < 5) {

        if (respuestaElegida == preguntasCiencia[i].respuestacorrecta) {
            i=i+1;
            preguntasLol.style.display = "none"
            siguientePregunta(i);
        } 
        else {
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
    } 
    else if (vivo = true) {
        var flecha = document.getElementById("flecha");
        flecha.style.display = "block"
    }
}






window.onload = function() {

    document.getElementById("preguntas").innerHTML = preguntasCiencia[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasCiencia[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasCiencia[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasCiencia[i].respuesta.c;
}

function siguientePregunta(i) {
    document.getElementById("preguntas").innerHTML = preguntasCiencia[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasCiencia[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasCiencia[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasCiencia[i].respuesta.c;
}
