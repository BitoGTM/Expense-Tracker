# User Guide: Expense Tracker

Welcome to the Expense Tracker application! This guide will help you understand how to use the application to track your expenses effectively.

## Getting Started

The Expense Tracker is a web-based application that allows you to:
- Add new expenses
- View your expense history
- Delete unwanted expense entries

All your data is stored locally in your browser, so it will persist between sessions on the same device.

## Adding an Expense

To add a new expense:

1. In the "Add a new item" section, fill out the form with your expense details:

   ![Add Expense Form](../screenshots/add-expense-form.png)

   - **Type**: Select the payment method used (Card, Cash, Cryptocoin, or Other)
   - **Name**: Enter a description of the expense (e.g., "Grocery Shopping", "Movie Tickets")
   - **Date**: Select the date when the expense occurred
   - **Amount**: Enter the amount spent (numbers only)

2. Click the "Add a new expense" button to save your expense.

3. If all fields are filled correctly, your expense will appear in the table below.

> **Note**: All fields are required. The amount must be a positive number.

## Viewing Your Expenses

All your expenses are displayed in a table below the form:

![Expense Table](../screenshots/expense-table.png)

The table shows:
- **Type**: The payment method used
- **Name**: The description of the expense
- **Date**: When the expense occurred
- **Amount**: How much was spent
- **Options**: Actions you can take for each expense

## Deleting an Expense

If you need to remove an expense:

1. Find the expense in the table
2. Click the "Delete" link in the Options column
3. The expense will be immediately removed from your list

> **Note**: This action cannot be undone, so be careful when deleting expenses.

## Data Storage

The Expense Tracker stores all your data in your browser's local storage. This means:

- Your data remains on your device and is not sent to any server
- Your expenses will still be available if you close the browser and return later
- Clearing your browser data or using private/incognito mode will affect data persistence

## Tips for Effective Expense Tracking

1. **Be consistent**: Track all your expenses, even small ones
2. **Add expenses promptly**: Enter expenses as soon as possible to avoid forgetting
3. **Use descriptive names**: Make the expense names clear and specific
4. **Review regularly**: Look at your expense history to understand your spending habits

## Troubleshooting

### My expenses disappeared
- Check if you're using the same browser and device
- Ensure you haven't cleared your browser data
- Verify you're not in private/incognito mode

### I can't add a new expense
- Make sure all form fields are filled out
- Verify the amount is a positive number
- Ensure you've selected a type from the dropdown

### The delete button doesn't work
- Try refreshing the page
- Check if your browser has JavaScript enabled

## Future Features

We're constantly working to improve the Expense Tracker. Upcoming features include:

- Data visualization with charts and graphs
- Expense categorization
- Budget tracking
- Export/import functionality
- And much more!

Stay tuned for updates!