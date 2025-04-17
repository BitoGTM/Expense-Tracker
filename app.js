document.getElementById(\"expForm\").addEventListener(\"submit\", addExpense);

// Two unused variables
const unusedVariable1 = "This variable is never used";
const unusedVariable2 = 42; // Another unused variable

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem(\"expenses\")) || [];

function addExpense(e) {
  e.preventDefault();

  let type = document.getElementById(\"type\").value;
  let name = document.getElementById(\"name\").value;
  let date = document.getElementById(\"date\").value;
  let amount = document.getElementById(\"amount\").value;

  if (type != \"chooseOne\" && name.length > 0 && date != 0 && amount > 0) {
    const expense = {
      type,
      name,
      date,
      amount,
      id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    };

    expenses.push(expense);
    // localStorage
    localStorage.setItem(\"expenses\", JSON.stringify(expenses));
    console.log(expenses);
    console.log(expense);

    document.getElementById('expForm').reset();
    showExpenses();
    showExpenseSummary();
  }
}

const showExpenses = () => {
    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>${expenses[i].name}</td>
                <td>${expenses[i].date}</td>
                <td>$${expenses[i].amount}</td>
                <td><a class=\"deleteButton\" onclick=\"deleteExpense(${expenses[i].id})\">
                    Delete</td>
            </tr>
        `;
    }
}

const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
    showExpenseSummary();
}

const calculateExpenseSummary = () => {
    // Initialize summary object
    const summary = {
        total: 0,
        breakdown: {
            Card: 0,
            Cash: 0,
            Cryptocoin: 0,
            Other: 0
        }
    };
    
    // Calculate totals
    for(let i = 0; i < expenses.length; i++) {
        const amount = parseFloat(expenses[i].amount);
        summary.total += amount;
        
        // Add to type breakdown
        if (summary.breakdown.hasOwnProperty(expenses[i].type)) {
            summary.breakdown[expenses[i].type] += amount;
        } else {
            summary.breakdown.Other += amount;
        }
    }
    
    // Round all numbers to 2 decimal places
    summary.total = summary.total.toFixed(2);
    for (const type in summary.breakdown) {
        summary.breakdown[type] = summary.breakdown[type].toFixed(2);
    }
    
    return summary;
}

const showExpenseSummary = () => {
    const summaryContainer = document.getElementById('expenseSummary');
    const summary = calculateExpenseSummary();
    
    let summaryHTML = `
        <h3 class=\"secondTitle\">Expense Summary</h3>
        <div class=\"summary-card\">
            <div class=\"summary-total\">Total Expenses: $${summary.total}</div>
            <div class=\"summary-breakdown\">
    `;
    
    // Add breakdown by type
    for (const type in summary.breakdown) {
        summaryHTML += `
            <div class=\"summary-item\">
                <div>${type}</div>
                <div>$${summary.breakdown[type]}</div>
            </div>
        `;
    }
    
    summaryHTML += `
            </div>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;
}

showExpenses();
showExpenseSummary();