document.getElementById("expForm").addEventListener("submit", addExpense);
document.getElementById("typeChartBtn").addEventListener("click", () => renderChart('type'));
document.getElementById("dateChartBtn").addEventListener("click", () => renderChart('date'));

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Chart reference to update it later
let expenseChart = null;

function addExpense(e) {
  e.preventDefault();

  let type = document.getElementById("type").value;
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;

  if (type != "chooseOne" && name.length > 0 && date != 0 && amount > 0) {
    const expense = {
      type,
      name,
      date,
      amount: parseFloat(amount), // Convert to number for calculations
      id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    };

    expenses.push(expense);
    // localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById('expForm').reset();
    showExpenses();
    renderChart('type'); // Update chart after adding expense
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
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
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
    renderChart('type'); // Update chart after deleting expense
}

// Function to get random colors for chart
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to group expenses by type or date
function groupExpenses(groupBy) {
    const grouped = {};
    
    if (groupBy === 'type') {
        // Group by expense type
        expenses.forEach(expense => {
            if (!grouped[expense.type]) {
                grouped[expense.type] = 0;
            }
            grouped[expense.type] += parseFloat(expense.amount);
        });
    } else if (groupBy === 'date') {
        // Group by month
        expenses.forEach(expense => {
            // Extract month and year from date
            const dateObj = new Date(expense.date);
            const monthYear = dateObj.toLocaleString('default', { month: 'short', year: 'numeric' });
            
            if (!grouped[monthYear]) {
                grouped[monthYear] = 0;
            }
            grouped[monthYear] += parseFloat(expense.amount);
        });
        
        // Sort dates chronologically
        const sortedGrouped = {};
        Object.keys(grouped)
            .sort((a, b) => new Date(a) - new Date(b))
            .forEach(key => {
                sortedGrouped[key] = grouped[key];
            });
            
        return sortedGrouped;
    }
    
    return grouped;
}

// Function to render the chart
function renderChart(chartType) {
    // Update active tab
    document.querySelectorAll('.chart-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(chartType + 'ChartBtn').classList.add('active');
    
    // Group data based on chart type
    const groupedData = groupExpenses(chartType);
    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);
    
    // Generate colors
    const backgroundColors = labels.map(() => getRandomColor());
    
    // Chart configuration
    const chartConfig = {
        type: chartType === 'type' ? 'pie' : 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount ($)',
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: chartType === 'type' ? 'Expenses by Type' : 'Expenses by Month',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: chartType === 'type' ? 'right' : 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: $${value.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    };
    
    // If chart already exists, destroy it first
    if (expenseChart) {
        expenseChart.destroy();
    }
    
    // Create new chart
    const ctx = document.getElementById('expenseChart').getContext('2d');
    expenseChart = new Chart(ctx, chartConfig);
}

// Initialize the page
showExpenses();
// Render initial chart if there are expenses
if (expenses.length > 0) {
    renderChart('type');
}