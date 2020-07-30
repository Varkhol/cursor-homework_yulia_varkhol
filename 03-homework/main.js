document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");


const getMaxDigit = (number) => {
    const digitArray = number.split('');
    return Math.max(...digitArray);
}

const numberToPower = (number, power) => {
    let result = number;

    if (power === 0) {
        result = 1;
    } else if (power > 0) {
        for (let i = 1; i < power; i++) {
            result *= number;
        }
    } else {
        for (let i = 1; i < power * (-1); i++) {
            result *= number;
        }
        result = 1 / result;
    }

    return result;
}

const makeFirstLetterCapital = (name) => {
    while (!name) {
        name = prompt("Ви ввели пусту строку, спробуйте ще раз")
    }

    const formatedName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    return formatedName;
}

const calculatesalaryWithoutTax = (salary, incomeTax, militaryTax) => {
    const pureSalary = salary - salary * ((Number(incomeTax) + Number(militaryTax)) / 100);

    return pureSalary;

}

const randomNumber = (n, m) => {
    const randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;

    return randomNumber;
}

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


document.writeln("<li class = 'task-item'>Функція №1: " + "Найбільша цифра в числі: " + getMaxDigit(prompt("Функція №1: Введіть число")) + "</li>");

const number = +prompt("Функція №2: Введіть число");
const power = +prompt("Функція №2: Введіть степінь");
document.writeln("<li class = 'task-item'>Функція №2: " + "Число " + number + " в степіні " + power + " дорівнює " + numberToPower(number, power) + "</li>");

const name = makeFirstLetterCapital(prompt("Функція №3: Введіть ім'я"));
document.writeln("<li class = 'task-item'>Функція №3: " + "Відформатоване ім'я: " + makeFirstLetterCapital(name) + "</li>");

const salary = prompt("Функція №4: Введіть вашу зарплату");
const incomeTax = prompt("Функція №4: Введіть податок на доходи фізичних осіб у відсотках");
const militaryTax = prompt("Функція №4: Введіть податок на військовий збір у відсотках");
document.writeln("<li class = 'task-item'>Функція №4: " + "Ваша чиста зарплата: " + calculatesalaryWithoutTax(salary, incomeTax, militaryTax) + "</li>");

const n = +prompt("Функція №5: Введіть нижню границю випадкового числа");
const m = +prompt("Функція №5: Введіть верхню границю випадкового числа");
document.writeln("<li class = 'task-item'>Функція №5: " + "Випадкове число: " + randomNumber(n, m) + "</li>");

const letter = prompt("Функція №6: Введіть букву, яку потрібно порахувати в слові");
const word = prompt("Функція №6: Введіть саме слово");

document.writeln("<li class = 'task-item'>Функція №6: " + "У вашому слові " + word + " " + "зустрічається " + countLetter(letter, word) + " букв " + "`" + letter + "`" + "</li>");

document.writeln("</ol>");
document.writeln("</div>")