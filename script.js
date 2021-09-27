// Getting all the HTML elements

const finalBalance = document.getElementById('balance');
const incAmount = document.getElementById('incomeAmount');
const expAmount = document.getElementById('expenseAmount');
const incType = document.getElementById('incomeType');
const expType = document.getElementById('expenseType');
const incBtn = document.getElementById('incomeBtn');
const expBtn = document.getElementById('expenseBtn');
const incTotal = document.getElementById('incomeTotal');
const expTotal = document.getElementById('expenseTotal');
const lastMovements = document.getElementById('lastMovements');


// Variables

let MOVEMENTS_LIST = [];
let balance = 0;
let incomes = 0;
let expenses = 0;

// Events

incBtn.addEventListener('click', function() {
    if (!incAmount.value || !incType.value) return;
    let income = {
        property: 'income',
        amount: parseFloat(incAmount.value),
        type: incType.value
    }
    MOVEMENTS_LIST.push(income)
    refreshUI();
    clearInputs([incAmount, incType]);
});

expBtn.addEventListener('click', function () {
    if (!expAmount.value || !expType.value) return;
    let outcome = {
        property: 'outcome',
        amount: parseFloat(expAmount.value),
        type: expType.value
    }
    MOVEMENTS_LIST.push(outcome)
    refreshUI();
    clearInputs([expAmount, expType]);
});

// Functions

const refreshUI = () => {
    incomes = calculateTotal('income', MOVEMENTS_LIST);
    expenses = calculateTotal('outcome', MOVEMENTS_LIST);
    balance = calculateBalance(incomes, expenses);
}

const calculateTotal = function(property, list) {
    let sum = 0;
    list.forEach(entry => {
        if (entry.property == property) {
            sum += entry.amount;
        }
    })
    return sum;
}

const calculateBalance = function (inc, exp) {
    return inc - exp;
}

const clearInputs = (array) => {array.forEach(element => {
    element.value = "";    
});
}


