var c = document.getElementById("ac");
var signo =  document.getElementById("cambiosigno");
var porcentaje = document.getElementById("porcentaje");
var s = document.getElementById("s");
var r =  document.getElementById("r");
var m = document.getElementById("m");
var d = document.getElementById("d");
var igual = document.getElementById("igual");
var coma = document.getElementById("coma");

//numeros del teclado
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n0 = document.getElementById("n0");


//variables globales
var operacion = "";
var operandoa;
var operandob;


n1.onclick = function(){
    resultado.textContent = resultado.textContent  + "1";
}
n2.onclick = function(){
    resultado.textContent = resultado.textContent  + "2";
}
n3.onclick = function(){
    resultado.textContent = resultado.textContent  + "3";
}
n4.onclick = function(){
    resultado.textContent = resultado.textContent  + "4";
}
n5.onclick = function(){
    resultado.textContent = resultado.textContent  + "5";
}
n6.onclick = function(){
    resultado.textContent = resultado.textContent  + "6";
}
n7.onclick = function(){
    resultado.textContent = resultado.textContent  + "7";
}
n8.onclick = function(){
    resultado.textContent = resultado.textContent  + "8";
}
n9.onclick = function(){
    resultado.textContent = resultado.textContent  + "9";
}
n0.onclick = function(){
    resultado.textContent = resultado.textContent  + "0";
}
c.onclick = function(){
    resetear();
}
s.onclick = function(){
    if(operacion !== ""){
        if (resultado.textContent === ""){
            operacion = "+";
            limpiar();
        }else{
            operandob = resultado.textContent;
            resolver();
            operandoa = resultado.textContent;
            operacion = "+";
            limpiar();
        }
    } else {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
    }
}
r.onclick = function(){
    if(operacion !== ""){
        if (resultado.textContent === ""){
            operacion = "-";
            limpiar();
        }else{
            operandob = resultado.textContent;
            resolver();
            operandoa = resultado.textContent;
            operacion = "-";
            limpiar();
        }
    } else{
        operandoa = resultado.textContent;
            operacion = "-";
            limpiar();
    }
 
}
m.onclick = function(){
    if(operacion !== ""){
        if(resultado.textContent ===""){
            operacion = "*";
            limpiar();
        } else{
        operandob = resultado.textContent;
        resolver();
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
        }
    } else{
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
    }
}
d.onclick = function(){
    if(operacion !== ""){
        if (resultado.textContent === ""){
            operacion = "/";
            limpiar();
        } else {
        operandob = resultado.textContent;
        resolver();
        operacion = "/";
        limpiar();
        }
    } else {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
    }
}
igual.onclick = function(){
    operandob = resultado.textContent;
    resolver();
}
signo.onclick = function(){
    cambiosigno();
}

porcentaje.onclick = function(){
    valorporcentual();
}
coma.onclick = function (){
    agregarcoma();
};



function agregarcoma(){
    resultado.textContent = resultado.textContent + '.';
}
function valorporcentual(){
    var res = 0;
    res = parseFloat(resultado.textContent);
    resultado.textContent = res/100; 
}
function cambiosigno(){
    var res = 0;
    res = parseFloat(resultado.textContent);
    resultado.textContent = -1 * res; 
}
function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }