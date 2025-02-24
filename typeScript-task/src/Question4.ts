
function outerFunction(message: string): Function {
    return function innerFunction(name: string): void {
        console.log(`Hi  ${name}  Congratulations , ${message}`)
    }
}


const sendMessage: Function = outerFunction("You have been accepted in angular training")
sendMessage("Rahaf")



 








           ^X
:wq

