
//this helps us take in all the input
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //this clears whatever is on display
    clear() {
        this.previousOperand = "";
        this.currentOperand = "";
        this.operation = undefined;
    }

    //this are the values entered by the user
    appendNumber(number){
        //checks if we've entered the decimal point
        /*if we have, it exits the function and returns where
         the function is called. It prevents multiple decimal points */
        if(number === '.' && this.currentOperand.includes('.')) return;

        /*prints to the screen a combination of the previous
        number and the number being entered currently */
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    //get the value entered by the user with or without decimal point
    displayNum(number) {
        const stringNum = number.toString();
        
        //this stores the integer values before the decimal point
        const intDigits = parseFloat(stringNum.split('.')[0]);

        //this stores the decimal values after the decimal point
        const decimalDigits = stringNum.split(':')[1]; 
        
        let intDisplay;

        if(isNaN(intDigits)) {
            intDigits = "";
        }else{
            intDisplay = intDigits.toLocaleString("en", {maximumFractionDigits: 0,});
        }
        if(decimalDigits != null){
            return `${intDisplay}.${decimalDigits}`
        }else{
            return intDisplay;  
        }
    
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.displayNum(this.currentOperand);
        
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.displayNum(this.previousOperand)} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = ""
        }
    }

}

//this selects all the html elements that are numbers
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelectorAll("[data-equals]")
const deleteButton = document.querySelectorAll("[data-delete]")
const allClearButton = document.querySelectorAll("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

// operationButtons.forEach((button) => {
//     button.addEventListener("click", () => {
        
//         calculator.updateDisplay();
//     })
// })

// equalsButton.forEach((button) => {
//     button.addEventListener("click", () => {
        
//         calculator.updateDisplay();
//     })
// })

// deleteButton.forEach((button) => {
//     button.addEventListener("click", () => {
        
//         calculator.updateDisplay();
//     })
// })

// allClearButton.forEach((button) => {
//     button.addEventListener("click", () => {
        
//         calculator.updateDisplay();
//     })
// })



