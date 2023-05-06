"use strict";
let deroulant = document.querySelector(".open");
deroulant.addEventListener("click", toggle);

function toggle(){
 let ouverte = document.querySelector(".sousrubrique");
  ouverte.classList.toggle("close");
}
