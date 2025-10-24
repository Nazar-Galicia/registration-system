## 🔐 User Registration System

This project implements a user registration and login system with basic OTP verification (code confirmation).
It is built using HTML, CSS, JavaScript, and SCSS, without a real backend — all server actions are simulated on the frontend using sessionStorage.

## 📋 Project Description

The system includes three main stages:

1. Login to an existing account (index.html)
2. Create a new account (create-account.html)
3. OTP verification (code confirmation via email or phone) — (otp-verification.html)

After successful verification, the user is redirected to a sample main page (site.html).
All “server request” actions are performed on the frontend using sessionStorage, which simulates data transfer between pages.

## ⚙️ Technologies Used

**HTML5 — page structure**
**SCSS (Sass) — styling with variables, mixins, and responsive design**
**Vanilla JavaScript (ES6) — form logic, OTP verification, event handling**
**Session Storage API — storing data between pages to simulate server requests**

## 🧩 Project Structure
project/
├── images/                     # All images
│   ├── index-images/
│   ├── otp-verification-page-images/
│   └── side-bg-image.png
│
├── scripts/                    # All JS logic
│   ├── create-account-form-scripts/
│   ├── index-scripts/
│   │   ├── index-script.js
│   │   └── validate-index-form.js
│   └── otp-verification-scripts/
│       ├── check-verification-code.js
│       ├── generate-verification-code.js
│       └── redirect-to-otp.js
│
├── styles/                     # All SCSS/CSS styles
│   ├── global-elements/        # Global variables, responsiveness, resets
│   ├── otp-verification-styles/
│   ├── reg-form-styles/
│   └── sign-in-styles/
│
├── .gitignore
├── create-account.html          # Account creation page
├── index.html                   # Login page
├── otp-verification.html        # OTP confirmation page
└── site.html                    # Placeholder page after verification

## 💻 How to Run the Project

Download the project or clone the repository:

git clone https://github.com/Nazar-Galicia/registration-system

Open the main file index.html in your browser (double-click or use Live Server in VS Code).

## 🧠 Main Features

🟢Login and registration form validation
🟢Random OTP code generation on the frontend
🟢User data stored via sessionStorage
🟢Page redirection according to the process flow
🟢Responsive design with SCSS and modular style structure

## 🧱 SCSS Structure

_global-variables.scss — colors, fonts, variables

_page.scss — base page styles

_adaptation.scss — responsive design

_hover.scss, _active.scss — element states

_reset.scss — style reset

separate SCSS files for each page (OTP, registration, sign-in)

## 👤 Author

Name: Nazar Galicia
Contact: nazargaliciaworkemail@gmail.com

GitHub: https://github.com/Nazar-Galicia

Date Created: October 24, 2025

*This project was created for educational purposes.*
*All server-related functions are simulations — no real data transmission occurs.*