const generateRandomColor = () => {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    
    return color;
};

const createBoxForColors = () => {
    for (let i = 0; i < 25; i++) {
        let box = document.createElement("div");
        box.className = "block";
        document.querySelector(".box-container").append(box);
    }
};

const setBlockSize = () => {
    const blockSize = "50px";
    const boxes = document.querySelectorAll(".block");

    boxes.forEach(element => {
        element.style.width = blockSize;
        element.style.height = blockSize;
    });
};

const setRandomColor = () => {
    const boxes = document.querySelectorAll(".block");

    boxes.forEach(element => {
        element.style.backgroundColor = `${generateRandomColor()}`;
    });
};

const removeBlocks = () => {
    const boxes = document.querySelectorAll(".block");

    boxes.forEach(element => {
        element.parentNode.removeChild(element);
    });
};

const generateBlocks = () => {
    removeBlocks();
    createBoxForColors();
    setBlockSize();
    setRandomColor();
};

document.writeln("<div class='box-container'>")
document.writeln("</div>")