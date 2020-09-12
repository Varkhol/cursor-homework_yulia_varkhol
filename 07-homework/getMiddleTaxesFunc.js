const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const bodyElement = document.querySelector('body');

function getMiddleTaxes() {
    return this.middleSalary * this.tax;
}

export function getMiddleTaxesFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#7 -> getMiddleTaxesFunc(Ukraine): ${getMiddleTaxes.call(ukraine)}`;
    bodyElement.append(element);
}