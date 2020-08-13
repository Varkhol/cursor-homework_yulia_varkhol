class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = [5, 4, 4, 5];
        this.studentStatus = true;
    }

    getInfo() {
        return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.studentStatus ? this.studentMarks : null;
    }

    set marks(number) {
        return this.studentStatus ? this.marks.push(number) : null;
    }

    getAverageMark() {
        if (this.studentStatus) {
            return (this.marks.reduce((acum, cur) => acum + cur, 0)) / this.studentMarks.length;
        }
    }

    dismiss() {
        return this.studentStatus = false;
    }

    recover() {
        return this.studentStatus = true;
    }
}

document.writeln("<div class='container'>")
document.writeln("<ol class='tasks-list'>");

const university = prompt("Введіть назву університету, де навчається студент");
const course = +prompt("Введіть курс, на якому навчається студент");
const fullName = prompt("Введіть повне ім'я студента");
let student = new Student(university, course, fullName);

document.writeln("<li class = 'task-item'>Інформація по студенту - > " + student.getInfo() + "</li>");
document.writeln("<li class = 'task-item'>Оцінки студента - > " + student.marks + "</li>");
student.marks = +prompt("Введіть нову оцінку студенту");

document.writeln("<li class = 'task-item'>Оцінки студента, враховуючи нову - > " + student.marks + "</li>");
document.writeln("<li class = 'task-item'>Середня оцінка студента - > " + student.getAverageMark() + "</li>");
student.dismiss();
document.writeln("<li class = 'task-item'>Оцінки виключеного студента - > " + student.marks + "</li>");
student.recover();
document.writeln("<li class = 'task-item'>Оцінки відновленого студента - > " + student.marks + "</li>");

document.writeln("</ol>");
document.writeln("</div>")