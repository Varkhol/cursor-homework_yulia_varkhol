document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {

    const pairs = [];
    const boys = [];
    const girls = [];

    students.forEach(student => {
        if (student === 'Олена' || student === 'Іра' || student === 'Світлана') {
            girls.push(student);
        } else {
            boys.push(student);
        }
    });

    for (let i = 0; i < girls.length; i++) {
        pairs.push(`[${girls[i]}, ${boys[i]} ]`);
    }

    return pairs;
}

const getPairsWithThemes = (pairs, themes) => {

    const pairsWithProjectThem = [];

    for (let i = 0; i < pairs.length; i++) {
        pairsWithProjectThem.push(`[${pairs[i]}:${themes[i]}]`);
    }

    return pairsWithProjectThem;
}

const getStudentsWithMarks = (students, marks) => {

    const studentsWithMarks = [];

    for (let i = 0; i < students.length; i++) {
        studentsWithMarks.push(`[${students[i]}:${marks[i]}]`);
    }

    return studentsWithMarks;
}

const getPairsWithRandomMarks = (pairsWithThemes) => {

    const pairsWithRandomMarks = [];

    for (let i = 0; i < pairsWithThemes.length; i++) {
        pairsWithRandomMarks.push(`[${pairsWithThemes[i]}:${(Math.floor(Math.random() * (5)) + 1)}]`);
    }

    return pairsWithRandomMarks;
}

const studentPairs = getPairs(students);
const studentPairsWithThemes = getPairsWithThemes(studentPairs, themes);
const studentsWithMarks = getStudentsWithMarks(students, marks);
const studentPairsWithRandomMarks = getPairsWithRandomMarks(studentPairsWithThemes);

document.writeln("<li class = 'task-item'>Функція №1: Пари студентів - > " + studentPairs + "</li>");
document.writeln("<li class = 'task-item'>Функція №2: Зіставлення  пар студентів з темами проєктів - > " + studentPairsWithThemes + "</li>");
document.writeln("<li class = 'task-item'>Функція №3: Зіставлення  студентів з оцінками - > " + studentsWithMarks + "</li>");
document.writeln("<li class = 'task-item'>Функція №4: Зіставлення  пар студентів з випадковими оцінками - > " + studentPairsWithRandomMarks + "</li>");


document.writeln("</ol>");
document.writeln("</div>")