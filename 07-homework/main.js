const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return salary * this.tax;
}

function getMiddleTaxes() {
    return this.middleSalary * this.tax;
}

function getTotalTaxes() {
    return this.middleSalary * this.tax * this.vacancies;
}

function getMySalary(country) {
    const taxValue = country.tax;
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    const taxes = (salary * taxValue).toFixed(2);
    const profit = (salary - taxes).toFixed(2);

    return { salary, taxes, profit };
}

document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");

const salary = +prompt("Функція №1: Введіть розмір вашої ЗП");
document.writeln("<li class = 'task-item'>Функція №1: Ваші податки в країнах - > " 
+ "Ukraine: "+ getMyTaxes.call(ukraine, salary) + ", " 
+ "Latvia: " + getMyTaxes.call(latvia, salary) + ", "  
+ "Litva: " + getMyTaxes.call(litva, salary) + "</li>");

document.writeln("<li class = 'task-item'>Функція №2: Середній податок в країнах - > " 
+ "Ukraine: "+ getMiddleTaxes.call(ukraine) + ", " 
+ "Latvia: " + getMiddleTaxes.call(latvia) + ", "  
+ "Litva: " + getMiddleTaxes.call(litva) + "</li>");

document.writeln("<li class = 'task-item'>Функція №3: Сумарний податок в країнах - > " 
+ "Ukraine: "+ getTotalTaxes.call(ukraine) + ", " 
+ "Latvia: " + getTotalTaxes.call(latvia) + ", "  
+ "Litva: " + getTotalTaxes.call(litva) + "</li>");

document.writeln("<li class = 'task-item'>Функція №4: Моя ЗП в країнах - > (Вивід в консоль) </li>");
const timeValue = 10000;
const timerUkraine = setInterval(() => console.log("Ukraine: " + Object.entries(getMySalary(ukraine))), timeValue);
const timerLatvia = setInterval(() => console.log("Latvia: " + Object.entries(getMySalary(latvia))), timeValue);
const timerLitva = setInterval(() => console.log("Litva: " + Object.entries(getMySalary(litva))), timeValue);

document.writeln("</ol>");
document.writeln("</div>")