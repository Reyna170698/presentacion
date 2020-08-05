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
        if (respuestaElegida == preguntasDeportes[i].respuestacorrecta) {
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

const preguntasDeportes= [
  {
      pregunta: "¿Cuántos tiempos tiene un partido de baloncesto?",
      respuesta: {
          a: "2",
          b: "4",
          c: "5"
      },
      respuestacorrecta: "b"
  },
  {
      pregunta: "¿Cuál es el estilo de natación más rápido?",
      respuesta: {
          a: "Crol",
          b: "Espalda",
          c: "Mariposa"
      },
      respuestacorrecta: "a"
  },
  {
      pregunta: "¿Cuántos jugadores componen un equipo de rugby?",
      respuesta: {
          a: "15",
          b: "11",
          c: "16"
      },
      respuestacorrecta: "a"
  },
  {
      pregunta: "¿De qué equipo de fútbol es el estadio más grande de Argentina?",
      respuesta: {
          a: "Vélez Sarsfield",
          b: "Racing",
          c: "River Plate"
      },
      respuestacorrecta: "c"
  },
  {
      pregunta: "¿Cuál de estas posiciones no representa a un jugador de Baseball?",
      respuesta: {
          a: "Pitcher",
          b: "Fullback",
          c: "Short Stop"
      },
      respuestacorrecta: "b"
  },
]


window.onload = function(){
  document.getElementById("preguntas").innerHTML = preguntasDeportes[i].pregunta;
  document.getElementById("respuestaA").innerHTML=preguntasDeportes[i].respuesta.a;
  document.getElementById("respuestaB").innerHTML=preguntasDeportes[i].respuesta.b;
  document.getElementById("respuestaC").innerHTML=preguntasDeportes[i].respuesta.c;
}

function siguientePregunta(i) {
    document.getElementById("preguntas").innerHTML = preguntasDeportes[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasDeportes[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasDeportes[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasDeportes[i].respuesta.c;
}