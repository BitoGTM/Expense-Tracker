# API Documentation

This document describes the JavaScript API for the Expense Tracker application. While this is primarily a client-side application without a traditional API, this documentation covers the core functions and data structures that could be useful for developers extending the application.

## Core Objects

### Expense Object

```javascript
{
  type: String,    // The payment method (Card, Cash, etc.)
  name: String,    // Description of the expense
  date: String,    // Date in YYYY-MM-DD format
  amount: Number,  // Expense amount
  id: Number       // Unique identifier
}
```

## Functions

### `addExpense(event)`

Adds a new expense to the tracking system.

**Parameters:**
- `event` (Event): The form submission event

**Returns:** void

**Behavior:**
1. Prevents the default form submission
2. Retrieves and validates form values
3. Creates a new expense object
4. Adds the expense to the expenses array
5. Updates localStorage
6. Resets the form
7. Updates the UI

**Example:**
```javascript
// This is typically called via event listener
document.getElementById("expForm").addEventListener("submit", addExpense);
```

### `showExpenses()`

Renders the expense table with current data.

**Parameters:** None

**Returns:** void

**Behavior:**
1. Clears the current table content
2. Iterates through the expenses array
3. Generates HTML table rows for each expense
4. Includes a delete button with the expense ID

**Example:**
```javascript
// Display all expenses in the table
showExpenses();
```

### `deleteExpense(id)`

Removes an expense from the tracking system.

**Parameters:**
- `id` (Number): The unique identifier of the expense to delete

**Returns:** void

**Behavior:**
1. Finds the expense with the matching ID
2. Removes it from the expenses array
3. Updates localStorage
4. Refreshes the UI

**Example:**
```javascript
// Delete the expense with ID 5
deleteExpense(5);
```

## LocalStorage Interface

The application uses the following localStorage methods:

### `localStorage.getItem("expenses")`

Retrieves the stored expenses array.

**Returns:** String (JSON representation of the expenses array)

**Example:**
```javascript
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
```

### `localStorage.setItem("expenses", JSON.stringify(expenses))`

Saves the expenses array to localStorage.

**Parameters:**
- Key: "expenses"
- Value: JSON string representation of the expenses array

**Example:**
```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

## Event Listeners

The application uses the following event listeners:

### Form Submission

```javascript
document.getElementById("expForm").addEventListener("submit", addExpense);
```

Triggers the `addExpense` function when the form is submitted.

### Delete Button Click

```javascript
// This is added dynamically in the showExpenses function
<a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">Delete</a>
```

Triggers the `deleteExpense` function when a delete button is clicked.

## Extending the API

When extending the application, consider adding functions for:

1. **Filtering expenses** by type, date range, or amount
2. **Sorting expenses** by different columns
3. **Calculating statistics** like total spending, average expense, etc.
4. **Exporting data** to different formats
5. **Visualizing expenses** with charts or graphs

Example extension:

```javascript
// Function to filter expenses by type
function filterExpensesByType(type) {
  return expenses.filter(expense => expense.type === type);
}

// Function to calculate total expenses
function calculateTotalExpenses() {
  return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
}
```

## Data Migration

If you change the data structure in future versions, you may need to migrate existing data. Here's a pattern for data migration:

```javascript
function migrateData() {
  const oldData = JSON.parse(localStorage.getItem("expenses")) || [];
  
  // Check if migration is needed (e.g., by checking for a new field)
  const needsMigration = oldData.length > 0 && !oldData[0].hasOwnProperty("category");
  
  if (needsMigration) {
    // Perform migration
    const newData = oldData.map(expense => ({
      ...expense,
      category: "Uncategorized" // Add new field with default value
    }));
    
    // Save migrated data
    localStorage.setItem("expenses", JSON.stringify(newData));
    return newData;
  }
  
  return oldData;
}

// Use this instead of direct localStorage access
const expenses = migrateData();
```