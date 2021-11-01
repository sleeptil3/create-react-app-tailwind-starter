# cra-template-tailwind-starter

## A Tailwind Template for `create-react-app`

### Usage

To create a new React project using this template, run the following command in your terminal, replacing [app-name] with your own:

```
% npx create-react-app [app-name] --template cra-template-tailwind-starter
```

### Features

This is built off of the official base template for [Create React App](https://github.com/facebook/create-react-app), adding the following features:

- react-router has been installed and is wrapping the App component in index.js
- A plug-in has been setup in Tailwind to show you what breakpoint you are currently at in the browser to help with styling. You will see it at the top-center of the browser window. When you are ready for production, or to hide it at any time, just comment out the breakpoint div in public/index.html
- Meta-tags have been set up for the Open Graph protocol in public/index.html. This is for setting what shows up when websites generate a preview when you share the link, like a Facebook post or a LinkedIn comment. The tags are currently comment out and awaiting your settings when ready.

For more information on Tailwind, please refer to:

- [Tailwind Docs](https://tailwindcss.com/docs)

For more information on React, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
