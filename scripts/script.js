// JavaScript Document
var kleurmodeButton = document.querySelector('#kleurmodebutton')

function veranderKleur() {
    var element = document.body;
    element.classList.toggle("kleur-mode");
}

kleurmodeButton.addEventListener('click', veranderKleur);