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

// Event Listeners

incBtn.addEventListener('click', function() {
    if (!incAmount.value || !incType.value) return;
    let income = {
        property: 'Income',
        amount: parseFloat(incAmount.value),
        type: incType.value
    };
    MOVEMENTS_LIST.push(income)
    refreshUI();
    clearInputs([incAmount, incType]);
});

expBtn.addEventListener('click', function () {
    if (!expAmount.value || !expType.value) return;
    let outcome = {
        property: 'Expense',
        amount: parseFloat(expAmount.value),
        type: expType.value
    };
    MOVEMENTS_LIST.push(outcome)
    refreshUI();
    clearInputs([expAmount, expType]);
});

// Functions

const refreshUI = () => {
    incomes = calculateTotal('Income', MOVEMENTS_LIST);
    expenses = calculateTotal('Expense', MOVEMENTS_LIST);
    balance = Math.abs(calculateBalance(incomes, expenses));
    
    let $sign = (incomes > expenses) ? "$" : "-$";

    deleteEl([lastMovements]);
    
    MOVEMENTS_LIST.forEach((movement,index) => {
        if (movement.property=="Income") {
            addML(MOVEMENTS_LIST, movement.property, movement.amount, movement.type, index)
        } else if (movement.property=="Expense") {
        addML(MOVEMENTS_LIST, movement.property, movement.amount, movement.type, index)
    }
    })

    finalBalance.innerHTML = `${$sign}${balance}`;
    incTotal.innerHTML = `$${incomes}`;
    expTotal.innerHTML = `$${expenses}`;
}

const calculateTotal = function(property, list) {
    let sum = 0;
    list.forEach(entry => {
        if (entry.property == property) {sum += entry.amount};
    });
    return sum;
}

const calculateBalance = (inc, exp) => {return inc - exp};

const deleteEl = (elems) => {elems.forEach((elem) => { elem.innerHTML = "" })};

const clearInputs = (array) => {array.forEach(element => {element.value = ""})};

const addML = function(list, property, amount, type, id) {
   const movement = `<li id="${id}" class="${property}">
                        <p class="movement">${type}: ${amount}</p>
                        <img id="edit" />
                        <img id="delete" />
                    </li>`;

    const position = "afterbegin";

    lastMovements.insertAdjacentHTML(position, movement);
}

