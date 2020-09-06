const generateIdBtn = document.querySelector('#generate-id');
const generateUpFontBtn = document.querySelector('#generate-up-font');
const generateDownFontBtn = document.querySelector('#generate-down-font');
const generatedIdText = document.querySelector('#id-value');
const generatedFontText = document.querySelector('#font-value');
let initFontSize = 14;
let fontValue;
let isFontUpFlag = false;
generatedFontText.style.fontSize = `${initFontSize}px`;
generatedFontText.innerHTML = `${initFontSize}px`;

function* generateId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const ID = generateId();

generateIdBtn.addEventListener("click", () => {
    generatedIdText.innerHTML = ID.next().value;
});

function* generateFontSize() {
    while (true) {
        isFontUpFlag ? yield ++initFontSize: yield --initFontSize;
    }
}

const fontSize = generateFontSize();

generateDownFontBtn.addEventListener('click', () => {
    isFontUpFlag = false;
    fontValue = fontSize.next().value;
    if (fontValue > 6) {
        generatedFontText.style.fontSize = `${fontValue}px`;
        generatedFontText.innerHTML = `${fontValue}px`;
    } else {
        generatedFontText.innerHTML = 'Generated font size is too small, please increase it!';
    }
});

generateUpFontBtn.addEventListener('click', () => {
    isFontUpFlag = true;
    fontValue = fontSize.next().value;
    if (fontValue < 60) {
        generatedFontText.style.fontSize = `${fontValue}px`;
        generatedFontText.innerHTML = `${fontValue}px`;
    } else {
        generatedFontText.innerHTML = 'Generated font size is too big, please decrease it!';
    }
});