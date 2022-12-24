"use strict";


const keys = document.querySelectorAll(".key");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!key) return;

    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play();

}


function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

keys.forEach(item => item.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playNote);