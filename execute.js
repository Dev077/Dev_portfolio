document.addEventListener("DOMContentLoaded", function () {
    const word = document.querySelector(".clickable-word");
    const audio = document.getElementById("audio-element");

    // Add a click event listener to the word
    word.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        }
    });
});


