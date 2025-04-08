# Developer Documentation

This document provides technical details about the Expense Tracker application for developers who want to understand, modify, or extend the codebase.

## Application Architecture

The Expense Tracker uses a simple architecture with three main components:

1. **HTML (index.html)**: Provides the structure and UI elements
2. **CSS (style.css)**: Handles styling and responsive design
3. **JavaScript (app.js)**: Implements the application logic and data management

### Data Flow

1. User inputs expense data in the form
2. JavaScript captures form submission event
3. Data is validated and added to the expenses array
4. The expenses array is saved to localStorage
5. The UI is updated to display the current expenses
6. Delete operations modify the array and update both localStorage and UI

## Core Functions

### `addExpense(e)`

This function handles the form submission and adds a new expense to the tracking system.

```javascript
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
      amount,
      id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
    };

    expenses.push(expense);
    // localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById('expForm').reset();
    showExpenses();
  }
}
```

**Key points:**
- Prevents default form submission behavior
- Retrieves values from form fields
- Validates that all fields have appropriate values
- Creates a new expense object with a unique ID
- Adds the expense to the expenses array
- Saves the updated array to localStorage
- Resets the form
- Updates the UI to show the new expense

### `showExpenses()`

This function renders the expenses table with the current expense data.

```javascript
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
```

**Key points:**
- Clears the current table content
- Iterates through the expenses array
- Generates HTML table rows for each expense
- Includes a delete button with the expense ID

### `deleteExpense(id)`

This function removes an expense from the tracking system.

```javascript
const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }

    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
}
```

**Key points:**
- Finds the expense with the matching ID
- Removes it from the expenses array
- Updates localStorage with the modified array
- Refreshes the UI to reflect the deletion

## Data Structure

The application uses a simple array of expense objects with the following structure:

```javascript
{
  type: String,    // The payment method (Card, Cash, etc.)
  name: String,    // Description of the expense
  date: String,    // Date in YYYY-MM-DD format
  amount: Number,  // Expense amount
  id: Number       // Unique identifier
}
```

## Local Storage

The application uses the browser's localStorage API to persist expense data between sessions:

- **Storage Key**: `"expenses"`
- **Storage Format**: JSON string representation of the expenses array
- **Retrieval**: Data is parsed from localStorage when the page loads
- **Updates**: localStorage is updated whenever expenses are added or deleted

## UI Components

### Form Elements

- **Type Dropdown**: Selection of payment methods
- **Name Input**: Text field for expense description
- **Date Input**: Date picker for expense date
- **Amount Input**: Numeric field for expense amount
- **Submit Button**: Triggers the addExpense function

### Expense Table

- **Headers**: Type, Name, Date, Amount, Options
- **Rows**: One row per expense
- **Delete Button**: Allows removing individual expenses

## Extension Points

Here are some suggestions for extending the application:

1. **Data Validation**: Enhance form validation with more specific rules
2. **Filtering**: Add ability to filter expenses by type, date range, etc.
3. **Sorting**: Allow sorting the expense table by different columns
4. **Categories**: Add expense categories for better organization
5. **Statistics**: Calculate and display spending statistics
6. **Export/Import**: Add functionality to export or import expense data
7. **Data Visualization**: Add charts or graphs to visualize spending patterns

## Best Practices

When modifying the code, please follow these best practices:

1. **Maintain Separation of Concerns**:
   - HTML for structure
   - CSS for presentation
   - JavaScript for behavior

2. **Use Descriptive Variable Names**:
   - Follow the existing naming conventions
   - Use camelCase for variables and functions

3. **Add Comments** for complex logic or non-obvious code

4. **Test Thoroughly** across different browsers and screen sizes

5. **Update Documentation** when making significant changes