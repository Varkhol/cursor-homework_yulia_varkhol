const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (student) => {
    const studentName = students[student].name;
    const getSubjects = Object.keys(students[student].subjects);

    return `${studentName}: ${getSubjects.map(element => element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase().replace('_', ' '))}`;
};

const getAverage = (...numbers) => {
    const arr = numbers.slice(0);
    let sum = 0;

    arr.forEach(element => {
        if (Number.isInteger(element)) {
            sum += element;
        }
    });

    return ((arr.reduce((acum, cur) => acum + cur, 0)) / arr.length).toFixed(2);
}

const getAverageMark = (student) => {
    const marksList = Object.values(students[student].subjects);
    const studentName = students[student].name;

    return getAverage(...marksList.flat());
};

const getStudentInfo = (student) => {
    const studentName = students[student].name;
    const studentCourse = students[student].course;
    return `Name: ${studentName}; Course: ${studentCourse}; Average mark: ${getAverageMark(student)}`;
};

const getStudentsNames = (students) => {
    const nameList = students.map((student) => student.name).sort();
    return nameList;
};

const getBestStudent = (students) => {
    const studentNames = students.map((student) => student.name);
    const averageMarksList = [];

    for (let student in students) {
        averageMarksList.push(parseFloat(getAverageMark(student)));
    }

    return studentNames[averageMarksList.indexOf(Math.max(...averageMarksList))];
};

const getNumberOfLetters = (string) => {
    let objectLetters = {};
    let word = string.toLowerCase().split("");

    for (let letter of word) {
        let key = letter.toUpperCase();
        if (objectLetters[key]) {
            objectLetters[key]++;
        } else {
            objectLetters[key] = 1;
        }
    }

    return objectLetters;
};

document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");

const student = +prompt("Функція №1: Введіть номер студента");
document.writeln("<li class = 'task-item'>Функція №1: Список предметів по студенту - > " + getSubjects(student) + "</li>");

document.writeln("<li class = 'task-item'>Функція №2: Середня оцінка по усім предметам студента - > " + getAverageMark(student) + "</li>");

document.writeln("<li class = 'task-item'>Функція №3: Інформація по студенту - > " + getStudentInfo(student) + "</li>");

document.writeln("<li class = 'task-item'>Функція №4: Відсортовані імена студентів - > " + getStudentsNames(students) + "</li>");

document.writeln("<li class = 'task-item'>Функція №5: Найкращий студент: - > " + getBestStudent(students) + "</li>");

const word = prompt("Функція №6: Введіть слово");
document.writeln("<li class = 'task-item'>Функція №6: Кількість букв у слові - > " + Object.entries(getNumberOfLetters(word)) + "</li>");

document.writeln("</ol>");
document.writeln("</div>")