"use strict";
let Button = document.querySelector(".menu__button");
let deroulant = document.querySelector(".open");

Button.addEventListener("click", toggleNavigation);
deroulant.addEventListener("click", toggle);


function toggleNavigation(){
    if(document.body.hasAttribute("burger-menu")){
        document.body.removeAttribute("burger-menu");
        Button.innerHTML = "Menu";
    }else{
        document.body.setAttribute("burger-menu", true);
        Button.innerHTML = "Retour";
    }
}
function toggle(){
 let ouverte = document.querySelector(".sousrubrique");
  ouverte.classList.toggle("close");
}
