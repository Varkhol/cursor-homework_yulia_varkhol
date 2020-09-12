const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const bodyElement = document.querySelector('body');

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

export function getPairsWithThemesFunc(){
    const element = document.createElement('div');
    element.className = 'item';
    element.innerHTML = `Homework#4 -> getPairsWithThemesFunc: ${getPairsWithThemes(getPairs(students),themes)}`;
    bodyElement.append(element);
}