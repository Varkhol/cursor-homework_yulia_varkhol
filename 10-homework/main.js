const keys = document.querySelectorAll(".key");

const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener("ended", () => {
        key.classList.remove("playing");
    });
};

document.addEventListener("keydown", playAudio);