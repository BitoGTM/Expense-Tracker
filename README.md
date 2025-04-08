# Expense Tracker

//Written by Bito Wingman

A simple, intuitive web application to track personal expenses. This app allows users to add, view, and delete expenses with an easy-to-use interface.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Feature Roadmap](#feature-roadmap)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Add Expenses**: Record expenses with details like type, name, date, and amount
- **View Expenses**: Display all expenses in a clean, tabular format
- **Delete Expenses**: Remove unwanted expense entries
- **Persistent Storage**: All data is saved to localStorage, persisting between sessions
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Demo

You can try out the application live at: [https://bitogmt.github.io/Expense-Tracker/](https://bitogmt.github.io/Expense-Tracker/)

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BitoGTM/Expense-Tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Expense-Tracker
   ```

3. Open the `index.html` file in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

Alternatively, you can set up a local development server:

```bash
# Using Python 3
python -m http.server

# Using Node.js (with http-server package)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 📝 Usage

### Adding an Expense

1. Select the expense type (Card, Cash, Cryptocoin, or Other)
2. Enter a name for the expense
3. Select the date of the expense
4. Enter the amount spent
5. Click "Add a new expense" button

### Viewing Expenses

All expenses are displayed in a table below the form, showing:
- Type of payment
- Name of expense
- Date of transaction
- Amount spent

### Deleting an Expense

To remove an expense, click the "Delete" button next to the expense entry in the table.

## 📁 Project Structure

```
Expense-Tracker/
├── index.html      # Main HTML file
├── style.css       # CSS styling
├── app.js          # JavaScript functionality
└── README.md       # Project documentation
```

### Code Overview

#### HTML (index.html)

The main HTML file contains:
- A form for adding new expenses
- A table to display existing expenses
- Links to the CSS and JavaScript files

#### CSS (style.css)

The CSS file provides styling for:
- Overall page layout and colors
- Form elements and positioning
- Table formatting
- Button styles

#### JavaScript (app.js)

The JavaScript file handles:
- Form submission and validation
- Adding expenses to the data array
- Saving expenses to localStorage
- Displaying expenses in the table
- Deleting expenses

## 🛠️ Technologies Used

- **HTML5**: Structure of the web application
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Core functionality and DOM manipulation
- **localStorage API**: Client-side data persistence

## 🗺️ Feature Roadmap

Future enhancements planned for the Expense Tracker:

### Data Visualization 📊
- Pie charts for expense categories
- Bar charts for monthly spending
- Line graphs for spending trends

### Expense Categories & Subcategories 🏷️
- Predefined expense categories
- Custom subcategories
- Category-based filtering and reporting

### Budget Management 💰
- Monthly/weekly budgets for different categories
- Progress bars for budget utilization
- Alerts for approaching budget limits

### Income Tracking 💵
- Track income alongside expenses
- Calculate net savings/spending
- Income vs. expense reports

### Recurring Expenses ♻️
- Set up recurring expenses
- Auto-generate recurring expenses
- Reminders for upcoming expenses

### Export/Import Data 📤📥
- Export to CSV or PDF
- Import from bank statements
- Generate expense reports

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Created by [BitoGTM](https://github.com/BitoGTM)