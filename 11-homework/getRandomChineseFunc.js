const DELAY = 50;
const bodyElement = document.querySelector('body');

const getRandomChinese = (length) => {
    return new Promise((resolve) => {

            let characters = [];
            let sign = parseInt(Date.now().toString().slice(-5));

            for (let i = 0; i < length; i++) {
                sign += DELAY;
                characters.push(sign);
            }
            resolve(String.fromCodePoint(...characters))
    });
};

export function getRandomChineseFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    getRandomChinese(5)
    .then(symbols => {
        element.innerText = `Homework#  11 -> getRandomChineseFunc:${symbols}`;
    })
    bodyElement.append(element);
}