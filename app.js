const challenge1 = (breakfast,lunch,dinner)  => {
    return `breakfast:${breakfast}, lunch:${lunch}, dinner:${dinner}`
}
const challenge2 = (number) => {
    if (typeof number != "number" || number <= 0) {
        return `needs to be a positive number`
    }
    else {
        if (number % 3 == 0 && number % 5 == 0) {
            return `fizz buzz`
        }
        else if (number % 3 == 0) {
            return `fizz`
        }
        else if (number % 5 == 0) {
            return `buzz`
        }
        else {
            return number
        }
    }
}
const challenge3 = (num1,num2) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return `make sure you enter 2 numbers`
    }
    else if ((num1 + num2) % 2 == 0) {
        return (num1 + num2)
    }
    else {
        return (num1 * num2)
    }
}
const challenge4 = () => {
    let numArray = []
    for (let i = 0; i < 5; i++) {
        numArray[i] = Math.ceil(Math.random()*50)
    }
    return numArray
}
const challenge5 = () => {
    let numbers = []
    for (let i = 9; i >= 0; i--)
    {
        numbers[9 - i] = i
    }
    return numbers
}

module.exports = {
    challenge1,
    challenge2,
    challenge3,
    challenge4,
    challenge5,
}