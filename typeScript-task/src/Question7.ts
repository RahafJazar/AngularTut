//create a person class 
class Person {
    name: string = ""
    age: number = 0
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    describeMe() {
        return `Hello I'm ${this.name} , I am ${this.age} years old!`
    }
}

//create instance of the  class
const person1: Person = new Person("Rahaf", 24)
console.log(person1.describeMe())
