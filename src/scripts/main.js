"use strict";
let menuButton = document.querySelector(".menu__button");
let deroulant = document.querySelector(".open");
menuButton.addEventListener("click", toggleNavigation);
deroulant.addEventListener("click", toggle);

function toggleNavigation(){
    if(document.body.hasAttribute("burger-menu")){
        document.body.removeAttribute("burger-menu");
        menuButton.innerHTML = "Menu";
    }else{
        document.body.setAttribute("burger-menu", true);
        menuButton.innerHTML = "Retour";
    }
}
function toggle(){
 let ouverte = document.querySelector(".sousrubrique");
  ouverte.classList.toggle("close");
}


