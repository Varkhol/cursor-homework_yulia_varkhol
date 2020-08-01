const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

const getAverage = (numbers) => {
    numbers = numbers.split(",").map(Number);
    let sum = 0;

    numbers.forEach(element => {
        if (Number.isInteger(element)) {
            sum += element;
        }
    });

    return sum / (numbers.length);
}

const getMedian = (numbers) => {
    numbers = numbers.split(",").map(Number);

    const array = [];
    numbers.forEach(element => {
        if (Number.isInteger(element)) {
            array.push(element);
        }
    });

    array.sort((a, b) => a - b);
    console.log(array.length % 2);
    let median = 0;

    if (array.length % 2 === 0) {
        median = 0.5 * (array[(array.length / 2) - 1] + array[array.length / 2]);
    } else {
        median = array[Math.floor(array.length / 2)];

    }
    return median;
}

const filterEvenNumbers = (numbers) => {
    numbers = numbers.split(",").map(Number);
    return numbers.filter(number => number % 2 > 0);
}

const countPositiveNumbers = (numbers) => {
    numbers = numbers.split(",").map(Number);
    return numbers.filter(number => number > 0).length;
}

const getDividedByFive = (numbers) => {
    numbers = numbers.split(",").map(Number);
    return numbers.filter(number => number % 5 === 0);
}

const replaceBadWords = (sentence) => {

    const words = sentence.split(" ");
    const sentenceWithoutBadWords = [];
    words.forEach(word => {
        if (word.toLowerCase() === "fuck" || word.toLowerCase() === "shit" || word.toLowerCase() === "ass") {
            sentenceWithoutBadWords.push("****");
        } else {
            sentenceWithoutBadWords.push(word);
        }

    });
    return sentenceWithoutBadWords.join(" ");
}

document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");

const length = +prompt("Функція №1: Введіть довжину масиву");
const min = +prompt("Функція №1: Введіть мінімальне значення випадкового цілого числа");
const max = +prompt("Функція №1: Введіть максимальне значення випадкового цілого числа");
document.writeln("<li class = 'task-item'>Функція №1: Масив випадкових цілих чисел - > " + "[" + getRandomArray(length, min, max) + "]" + "</li>");

const numbersForFunction3 = prompt("Введіть масив чисел для функції #3 (для розділення чисел використовуйте кому)");
document.writeln("<li class = 'task-item'>Функція №3: Середнє арифметичне всіх переданих аргуметів - > " + getAverage(numbersForFunction3) + "</li>");

const numbersForFunction4 = prompt("Введіть масив чисел для функції #4  (для розділення чисел використовуйте кому)");
document.writeln("<li class = 'task-item'>Функція №4: Медіана всіх переданих аргуметів - > " + getMedian(numbersForFunction4) + "</li>");

const numbersForFunction5 = prompt("Введіть масив чисел для функції #5  (для розділення чисел використовуйте кому)");
document.writeln("<li class = 'task-item'>Функція №5: Відфільтровані парні числа - > " + filterEvenNumbers(numbersForFunction5) + "</li>");

const numbersForFunction6 = prompt("Введіть масив чисел для функції #6  (для розділення чисел використовуйте кому)");
document.writeln("<li class = 'task-item'>Функція №6: Кількість чисел більше 0 - > " + countPositiveNumbers(numbersForFunction6) + "</li>");

const numbersForFunction7 = prompt("Введіть масив чисел для функції #7  (для розділення чисел використовуйте кому)");
document.writeln("<li class = 'task-item'>Функція №7: Числа, які діляться на 5 - > " + getDividedByFive(numbersForFunction7) + "</li>");


const sentenceWithBadWords = prompt("Введіть речення з поганими словами");
document.writeln("<li class = 'task-item'>Функція №8: Речення без поганих слів - > " + replaceBadWords(sentenceWithBadWords) + "</li>");
document.writeln("</ol>");
document.writeln("</div>")