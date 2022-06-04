function span( x ) {
    return document.getElementById( x );
}

function cargaDePalabras(x) {
  const listado = [
    "CASA",
    "PERRO",
    "GATO",
    "ELEFANTE",
    "GALLINA",
    "VACA",
    "LORO",
    "CABALLO",
    "CERDO",
    "CONEJO",
  ];
    
  
  palabra_Buscar = listado[Math.floor(Math.random() * (listado.length ))];
  console.log(listado);
  console.log(palabra_Buscar);
    return x;
    
}


let palabra = "";
let errores = 0;
let aciertos = 0;
let botonJugar = document.getElementById("jugar");
botonJugar.addEventListener('click', comenzar);
console.log(botonJugar);





function comenzar() {
  botonJugar.disabled = true;
  let errores = 0;
  let aciertos = 0;
  cargaDePalabras();
  const espaciados = span("palabra_adivinar");
  espaciados.innerHTML = "";
  palabra = palabra_Buscar;
  console.log(palabra.length);
  const espacios = palabra.length;
  for (let i = 0; i < espacios; i++) {
    espaciados.innerHTML += "<span id='letra" + i + "'></span>";
  }
  
}


const botones_teclado = document.querySelectorAll("#teclado button");
for (let i = 0; i < botones_teclado.length; i++) {
  botones_teclado[i].addEventListener("click", comprobar_botones);
}

function comprobar_botones(event) {
  const botones_teclado = event.target;
  botones_teclado.disabled = true;

  const letra = this.innerHTML;
  let verificador = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      span("letra" + i).innerHTML = letra;
      aciertos++;
      verificador = true;
    }

    if (aciertos == palabra.length) {
      console.log(palabra);
      span("imagenAhorcado").style.display = "none";
      span("imagenGanador").style.display = "flex";
      span("palabra_adivinar").innerHTML = palabra;
      botonJugar.disabled = false;
      botones_teclado.disabled = true;
    }
  }
  if (verificador == false) {
    errores++;
    span("imagenAhorcado").style.backgroundPosition = -(300 * errores) + "px 0";
    
    if (errores == 4) {
      span("imagenAhorcado").style.display = "none";
      span("imagenPerdedor").style.display = "flex";
      span("palabra_adivinar").innerHTML = palabra;
      botonJugar.disabled = false;
      botones_teclado.disabled = true;
    } 
    
    
  }
  }



















/*
const letra_espacio = document.createElement("span");
espaciados.appendChild(letra_espacio);*/




