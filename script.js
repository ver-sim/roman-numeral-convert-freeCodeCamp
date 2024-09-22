const number = document.querySelector('#number');
const convrtBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');
const romanNumbers = [
    {value: 1000, numerals: 'M'},
    {value: 900, numerals: 'CM'},
    {value: 500, numerals: 'D'},
    {value: 400, numerals: 'CD'},
    {value: 100, numerals: 'C'},
    {value: 90, numerals: 'XC'},
    {value: 50, numerals: 'L'},
    {value: 40, numerals: 'XL'},
    {value: 10, numerals: 'X'},
    {value: 9, numerals: 'IX'},
    {value: 5, numerals: 'V'},
    {value: 4, numerals: 'IV'},
    {value: 1, numerals: 'I'},
];

const decimalToRoman = (inputnum) => {
    let romanNumber = '';
    for (let i = 0; i < romanNumbers.length; i++) {
        while (inputnum >= romanNumbers[i].value) {
            romanNumber += romanNumbers[i].numerals;
            inputnum -= romanNumbers[i].value;
        }    
    }
    return romanNumber;
};

const checkUserInput = () => {
    const numberInput = parseInt(number.value);

    if (!number.value || isNaN(numberInput)){
        output.textContent = "Please enter a valid number";
        output.classList.add('alert-msg');
        output.classList.remove('result');
    } else if (numberInput < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.add('alert-msg');
        output.classList.remove('result'); 
    } else if (numberInput >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.add('alert-msg');
        output.classList.remove('result');
    } else {
        output.textContent = decimalToRoman(numberInput);
        output.classList.add('result');
        output.classList.remove('alert-msg');
    }
    number.value = ''; 

};


convrtBtn.addEventListener('click', checkUserInput);

number.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    }
});