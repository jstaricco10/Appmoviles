
var cifra = "";
var acumulado = 0;

function calculadora(boton) {

  var nodos = document.getElementById('resultado');
  var nodo = nodos[0].firstChild;

  switch(boton) {
    case 'C':
      // En el caso de pulsar en limpiar, deja en blanco el display.
      nodo.nodeValue = "";
      break;

    case '=':
      // Esta variable va a guardar el resultado de la operación en pantalla.
      var resultado = eval(nodo.nodeValue);
      
      // Y aquí vamos a mostrarlo en el display.
      nodo.nodeValue = resultado;
      break;

    default:
      // De lo contrario, va a recoger los números que vayamos pulsando.
      nodo.nodeValue = nodo.nodeValue + boton;
      break;
  }
}
document.getElementById("ac").addEventListener("click", calculadora('C'));
// document.getElementById("cambiosigno").addEventListener("click", cambio);
// document.getElementById("porcentaje").addEventListener("click", valorporcentual);
document.getElementById("s").addEventListener("click", calculadora('+'));
document.getElementById("r").addEventListener("click", calculadora('-'));
document.getElementById("m").addEventListener("click", calculadora('*'));
document.getElementById("d").addEventListener("click", calculadora('/'));
document.getElementById("igual").addEventListener("click", calculadora('='));


//numeros del teclado
document.getElementById("n1").addEventListener("click", calculadora(1));
document.getElementById("n2").addEventListener("click", calculadora(2));
document.getElementById("n3").addEventListener("click", calculadora(3));
document.getElementById("n4").addEventListener("click", calculadora(4));
document.getElementById("n5").addEventListener("click", calculadora(5));
document.getElementById("n6").addEventListener("click", calculadora(6));
document.getElementById("n7").addEventListener("click", calculadora(7));
document.getElementById("n8").addEventListener("click", calculadora(8));
document.getElementById("n9").addEventListener("click", calculadora(9));
document.getElementById("n0").addEventListener("click", calculadora(0));