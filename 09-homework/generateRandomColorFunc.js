const bodyElement = document.querySelector('body');

const generateRandomColor = () => {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    
    return color;
};

export function generateRandomColorFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#9 -> generateRandomColorFunc: ${generateRandomColor()}`;
    bodyElement.append(element);
}