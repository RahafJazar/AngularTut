"use strict";
function outerFunction(message) {
    return function innerFunction(name) {
        console.log(`Hi  ${name}  Congratulations , ${message}`);
    };
}
const sendMessage = outerFunction("You have been accepted in angular training");
sendMessage("Rahaf");
//# sourceMappingURL=Question4.js.map