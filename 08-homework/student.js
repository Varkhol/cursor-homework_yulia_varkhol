const bodyElement = document.querySelector('body');

export class Student {
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
  }