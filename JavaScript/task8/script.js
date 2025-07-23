const form = document.querySelector('form');

let Expenses = localStorage.getItem('Expenses') ? JSON.parse(localStorage.getItem('Expenses')) : []


function displayTotalAmount(filteredExpenses) {

    let total = 0

    filteredExpenses.forEach(e => {
        total += e.amount
    });

    let totalDiv = document.getElementById('total-expense');
    if (!totalDiv) {
        totalDiv = document.createElement('div');
        totalDiv.id = 'total-expense';
        totalDiv.style.fontSize = '1.2em';
        totalDiv.style.fontWeight = 'bold';
        totalDiv.style.margin = '10px 0';
        document.body.appendChild(totalDiv);
    }
    totalDiv.textContent = `Total Expense: ₹${total}`;
}

displayTotalAmount(Expenses)

form.addEventListener('submit', function (event) {

    event.preventDefault()

    let name = form.querySelector('#name').value
    let amount = form.querySelector('#amount').value
    let date = form.querySelector('#date').value

    const expense = {
        name: name,
        amount: Number(amount),
        date: date
    }


    if (Object.values(expense).every(e => e !== '')) {
        Expenses.push(expense)
        localStorage.setItem("Expenses", JSON.stringify(Expenses))
        displayTotalAmount(Expenses)
    } else {
        alert('Enter All field!')
    }

})

document.querySelector('#month').addEventListener('change', function (e) {

    const expenseMonth = e.target.value

    const data = JSON.parse(localStorage.getItem('Expenses'))

    const filteredExpenses = data.filter((e) => {
        const expenseDate = new Date(e.date);
        const month = expenseDate.toLocaleString('default', { month: 'long' });
        return expenseMonth === 'All' || month === expenseMonth;

    })

    displayTotalAmount(filteredExpenses)

});