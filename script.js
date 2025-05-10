console.log("Welcome to Car Animation!");

let carSound = document.getElementById("carSound");
let audio = new Audio("sound.mp3");
audio.loop = true;

carSound.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

