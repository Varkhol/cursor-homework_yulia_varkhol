const bodyElement = document.querySelector('body');

const countLetter = (letter, word) => {
    let count = 0;
    const letterArray = word.toLowerCase().split('');

    for (let i = 0; i < letterArray.length; i++) {

        if (letterArray[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

export function countLetterFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#3 -> countLetterFunc: ${countLetter("s", "class")}`;
    bodyElement.append(element);
}