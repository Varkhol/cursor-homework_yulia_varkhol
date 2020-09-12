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
const bodyElement = document.querySelector('body');

const getAverage = (...numbers) => {
    const arr = numbers;

    return parseFloat(((arr.reduce((acum, cur) => acum + cur, 0)) / arr.length).toFixed(2));
}

const getAverageMark = (student) => {
    const marksList = Object.values(students[student].subjects);

    return getAverage(...marksList.flat());
};

const getBestStudent = (students) => {
    const studentNames = students.map((student) => student.name);
    const averageMarksList = [];

    for (let student in students) {
        averageMarksList.push(parseFloat(getAverageMark(student)));
    }

    return studentNames[averageMarksList.indexOf(Math.max(...averageMarksList))];
};

export function getBestStudentFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#6 -> getBestStudentFunc: ${getBestStudent(students)}`;
    bodyElement.append(element);
}