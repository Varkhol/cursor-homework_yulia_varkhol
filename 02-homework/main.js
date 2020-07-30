function sumNumbers() {
    let n = parseInt(prompt("Будь ласка, введіть число N:"));

    while (Number.isNaN(n)) {
        alert("Ви ввели нечислове значення, будь ласка, спробуйте ще")
        n = parseInt(prompt("Будь ласка, введіть число N:"));
    };

    let m = parseInt(prompt("Будь ласка, введіть число M, воно повинно бути більшим за N:"));

    while (Number.isNaN(m) || n >= m) {
        alert("Ви ввели нечислове значення або N менше M, будь ласка, спробуйте ще")
        m = parseInt(prompt("Будь ласка, введіть число M:"));
    };

    document.writeln("<li class = 'task-item'>" + 'N = ' + n + "</li>");
    document.writeln("<li class = 'task-item'>" + 'M = ' + m + "</li>");

    let skipEven = confirm("Пропускати парні числа?");
    alert(skipEven);

    let sum = 0;
    for (let i = n; i <= m; i++) {
        if (skipEven === true && i % 2 === 0) {} else {
            sum += i;
        };
    };
    document.writeln("<li class = 'task-item'>" + 'Сума чисел від N до M = ' + sum + "</li>");
}

document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");
sumNumbers();
document.writeln("</ol>");
document.writeln("</div>")