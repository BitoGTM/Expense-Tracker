# Installation Guide

This guide provides detailed instructions for setting up the Expense Tracker application in different environments.

## Basic Installation

The Expense Tracker is a client-side web application that requires no server-side components. To install:

1. Clone the repository:
   ```bash
   git clone https://github.com/BitoGTM/Expense-Tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Expense-Tracker
   ```

3. Open `index.html` in your web browser to use the application.

That's it! Since this is a client-side application, no build process or server setup is required for basic usage.

## Setting Up a Local Development Server

While you can run the application directly by opening the HTML file, using a local development server provides a more realistic environment. Here are several options:

### Using Python

Python comes with a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Using Node.js

If you have Node.js installed:

```bash
# Using npx and http-server
npx http-server -p 8000

# Or install globally
npm install -g http-server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Using Live Server in VS Code

If you're using Visual Studio Code:

1. Install the "Live Server" extension
2. Right-click on `index.html` in the file explorer
3. Select "Open with Live Server"

## Deployment Options

### GitHub Pages

To deploy the application to GitHub Pages:

1. Fork the repository to your GitHub account
2. Go to the repository settings
3. Scroll down to the GitHub Pages section
4. Select the branch you want to deploy (usually `main` or `master`)
5. Save the settings

Your application will be available at `https://[your-username].github.io/Expense-Tracker/`

### Netlify

To deploy to Netlify:

1. Create an account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect to your GitHub account
4. Select the Expense Tracker repository
5. Configure build settings (not required for this project)
6. Click "Deploy site"

### Vercel

To deploy to Vercel:

1. Create an account on [Vercel](https://vercel.com/)
2. Click "Import Project"
3. Connect to your GitHub account
4. Select the Expense Tracker repository
5. Configure project settings (not required for this project)
6. Click "Deploy"

## Browser Compatibility

The Expense Tracker is compatible with:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Mobile Compatibility

The application is designed to be responsive and work on mobile devices. However, for the best experience:

- Use modern mobile browsers
- Ensure JavaScript is enabled
- Allow local storage in your browser settings

## Troubleshooting

### Application doesn't load properly

- Check if JavaScript is enabled in your browser
- Ensure your browser supports localStorage
- Try clearing your browser cache

### Changes don't persist between sessions

- Make sure cookies and site data are allowed
- Check if you're in private/incognito mode
- Verify that localStorage is not full (though unlikely with this app)

### Local server doesn't work

- Check if the port is already in use
- Ensure you're in the correct directory
- Verify that you have the necessary permissions

## Advanced Setup

### Adding Custom Categories

You can customize the expense types by modifying the HTML:

1. Open `index.html`
2. Find the `<select id="type">` element
3. Add or modify the `<option>` elements to reflect your preferred categories

### Changing Styles

To customize the appearance:

1. Open `style.css`
2. Modify the CSS properties as needed
3. For major design changes, consider adding new CSS classes

### Adding New Features

See the [Developer Guide](developer-guide.md) for information on extending the application functionality.