"use strict";
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}
class Bachelor extends Student {
    isPassed() {
        const sum = this.marks.reduce(function (prevValue, currentVal) {
            return prevValue + currentVal;
        });
        const avg = sum / this.marks.length;
        return avg >= 60;
    }
}
class PHD extends Student {
    isPassed() {
        const sum = this.marks.reduce(function (prevValue, currentVal) {
            return prevValue + currentVal;
        });
        const avg = sum / this.marks.length;
        return avg >= 80;
    }
}
const bachelorStudent = new Bachelor("Rahaf", [70, 80, 90]);
const phdStudent = new PHD("Marah", [50, 50, 50]);
console.log(`${bachelorStudent.name} passed :${bachelorStudent.isPassed()} `);
console.log(`${phdStudent.name} passed :${phdStudent.isPassed()} `);
//# sourceMappingURL=Question8.js.map