"use strict";
//create a person class 
class Person {
    constructor(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    describeMe() {
        return `Hello I'm ${this.name} , I am ${this.age} years old!`;
    }
}
//create instance of the  class
const person1 = new Person("Rahaf", 24);
console.log(person1.describeMe());
//# sourceMappingURL=Question7.js.map