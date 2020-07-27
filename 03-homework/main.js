document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");


const getMaxDigit = (number) => {
    const digitArray = number.split('');
    document.writeln("<li class = 'task-item'>Функція №1: " + "Найбільша цифра в числі: "  + Math.max(...digitArray) + "</li>");
}

const numberToPower = (number, power) => {
    let result = number;

    for  (let i = 1; i < power; i++) {
        result *= number;
    }
    document.writeln("<li class = 'task-item'>Функція №2: " + "Число " + number + " в степіні " + power + " дорівнює " + result + "</li>");
}

const makeFirstLetterCapital = (name) => {
    while(name === "") {
       prompt("Ви ввели пусту строку, спробуйте ще раз") 
    }

    const formatedName = name[0].toUpperCase() + name.slice(1);
    document.writeln("<li class = 'task-item'>Функція №3: " + "Відформатоване ім'я: " + formatedName + "</li>");
}

const calculatesalaryWithoutTax = (salary, incomeTax, militaryTax) => {
    const pureSalary = salary - salary * ((Number(incomeTax) + Number(militaryTax))/100);
    document.writeln("<li class = 'task-item'>Функція №4: " + "Ваша чиста зарплата: " + pureSalary + "</li>");
}

const randomNumber = (n, m) => {
    const randomNumber = Math.floor(Math.random() * (m)) + 1;
    document.writeln("<li class = 'task-item'>Функція №5: " + "Випадкове число: " + randomNumber + "</li>");
}

const countLetter = (letter, word) => {
    let count = 0;
    const letterArray = word.toLowerCase().split('');

    for(let i = 1; i < letterArray.length; i++) {
        
        if (letterArray[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    document.writeln("<li class = 'task-item'>Функція №6: " + "У вашому слові " + word + " " +  "зустрічається " + count + " букв " + "`" + letter + "`" + "</li>");

}

getMaxDigit(prompt("Функція №1: Введіть число"));
numberToPower(prompt("Функція №2: Введіть число"), prompt("Функція №2: Введіть степінь"));
makeFirstLetterCapital(prompt("Функція №3: Введіть ім'я"));
calculatesalaryWithoutTax(prompt("Функція №4: Введіть вашу зарплату"), prompt("Функція №4: Введіть податок на доходи фізичних осіб у відсотках"), prompt("Функція №4: Введіть податок на військовий збір у відсотках"));
randomNumber(prompt("Функція №5: Введіть нижню границю випадкового числа"), prompt("Функція №5: Введіть верхню границю випадкового числа"));
countLetter(prompt("Функція №6: Введіть букву, яку потрібно порахувати в слові"), prompt("Функція №6: Введіть саме слово"));

document.writeln("</ol>");
document.writeln("</div>")