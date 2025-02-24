abstract class Student {

    constructor(public name: string, public marks: number[]) { }
    abstract isPassed(): boolean;

}

class Bachelor extends Student {
    isPassed(): boolean {
        const sum = this.marks.reduce(function (prevValue: number, currentVal: number): number {
            return prevValue + currentVal
        })
        const avg = sum / this.marks.length;
        return avg >= 60

    }

}

class PHD extends Student {
    isPassed(): boolean {
        const sum = this.marks.reduce(function (prevValue: number, currentVal: number): number {
            return prevValue + currentVal
        })
        const avg = sum / this.marks.length;
        return avg >= 80
    }

}


const bachelorStudent: Bachelor = new Bachelor("Rahaf", [70, 80, 90])
const phdStudent: PHD = new PHD("Marah", [50, 50, 50])
console.log(`${bachelorStudent.name} passed :${bachelorStudent.isPassed()} `)
console.log(`${phdStudent.name} passed :${phdStudent.isPassed()} `)