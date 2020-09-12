const bodyElement = document.querySelector('body');

const countPositiveNumbers = (numbers) => {
    const arr = numbers.split(',').map(item => Number(item));
    return arr.filter(number => number > 0).length;
}

export function countPositiveNumbersFunc() {
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#5 -> countPositiveNumbersFunc: ${countPositiveNumbers("1,4,7,-9,-10")}`;
    bodyElement.append(element);
}