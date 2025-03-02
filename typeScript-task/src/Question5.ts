function getPositive(numbers: number[]): void {
    console.log(numbers.filter(function (value: number) {
        return value > 0
    }))
}

const arrayOfNumbers: number[] = [-2, 6, 8, 1, -6, 0, 3, 5]
getPositive(arrayOfNumbers)