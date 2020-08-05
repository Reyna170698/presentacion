const misPreguntas = [
    {
        pregunta: "¿Cómo se llamaba el papá de Simba en El Rey León?",
        respuesta: {
            a:"Scar",
            b:"Pumba",
            c:"Mufasa"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿Cuántos colores tiene un cubo de Rubik clásico?",
        respuesta: {
            a:"6",
            b:"4",
            c:"8"
        },
        respuestCorrecta: "a"
    },
    {
        pregunta: "¿Qué Beatle fue asesinado por un fan?",
        respuesta: {
            a:"Paul McCartney",
            b:"Ringo Star",
            c:"Jonh Lennon"
        },
        respuestCorrecta: "c"
    },
    {
        pregunta: "¿Cuál es el nombre de la canción de la película Titanic?",
        respuesta: {
            a:"Bad Romance",
            b:"My Heart Will Go On",
            c:"Livin' On A Prayer"
        },
        respuestCorrecta: "b"
    },
    {
        pregunta: "¿Qué quería comerse Alf?",
        respuesta: {
            a:"A Willie",
            b:"Al gato",
            c:"A Bryan"
        },
        respuestCorrecta: "b"
    },

]


var i=0;
var vidas=3;
var vivo=true;

  window.onload = function() {
    
     document.getElementById("preguntas").innerHTML=misPreguntas[i].pregunta;
     document.getElementById("respuestaA").innerHTML=misPreguntas[i].respuesta.a;
     document.getElementById("respuestaB").innerHTML=misPreguntas[i].respuesta.b;
     document.getElementById("respuestaC").innerHTML=misPreguntas[i].respuesta.c;
  }



  function validar(respuestaElegida){
    if (i<5){
      if (respuestaElegida==misPreguntas[i].respuestCorrecta) {
       i=i+1;
       siguientePregunta(i);
       
      }
      
      else {
        vidas=vidas-1;
        if (vidas==0) {
          vivo=false;
          //El screamer va acá
          console.log("PERDISTE");
        }
      }
    }   

    else if (vivo=true) {
        //CARTEL DE GANASTE
        console.log("GANASTE");
       }
  }

function siguientePregunta(i){
     document.getElementById("preguntas").innerHTML=misPreguntas[i].pregunta;
     document.getElementById("respuestaA").innerHTML=misPreguntas[i].respuesta.a;
     document.getElementById("respuestaB").innerHTML=misPreguntas[i].respuesta.b;
     document.getElementById("respuestaC").innerHTML=misPreguntas[i].respuesta.c;
}