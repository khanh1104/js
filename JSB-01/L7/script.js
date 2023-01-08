function divide(num1,num2) {
    var result = null
    if (num2 === 0) {
        result = "Cannot divide by zero"
    } else {
        result = num1 / num2
    }
    return result
}
var myNumber = divide(2,10)
console.log(myNumber)
