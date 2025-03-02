//addition function
export function add(num1: number, num2: number): number {
    return num1 + num2;
}


//subtraction function
export function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

//multiplication function
export function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

//division function
export function divide(num1: number, num2: number): number {
    if (num2 == 0) {
        throw new Error("Division by zero is not allowed")
    }
    return num1 / num2;
}
