const DELAY = 50;
let btn = document.querySelector(".btn");
let length = document.querySelector(".length-input");
let result = document.querySelector(".result");

const getRandomChinese = (length) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            let characters = [];
            let sign = parseInt(Date.now().toString().slice(-5));

            for (let i = 0; i < length; i++) {
                sign += DELAY;
                characters.push(sign);
            }

            resolve(String.fromCodePoint(...characters))
        }, length * DELAY);
    });
};

btn.addEventListener("click", () => {
    getRandomChinese(length.value)
        .then(symbols => {
            result.innerText = `Chinese symbols:${symbols}`;
        })
});