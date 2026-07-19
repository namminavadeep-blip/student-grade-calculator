# 🎓 Student Grade Calculator - Unit Testing with Jest

A student grade calculator web application built using **HTML5, CSS3, JavaScript, and Node.js Unit Testing with Jest**.

This project demonstrates how application logic can be separated into reusable JavaScript functions and tested independently using the Jest testing framework.

The calculator allows users to enter student grades, calculate the average score, determine the final letter grade, and verify whether a student has passed or failed.

This project was created for the **COMP 2068 Group Tutorial Presentation** to demonstrate the concepts of **Unit Testing in Node.js using Jest**.

---

# 🌐 Live Demo

The application is deployed using Netlify:

🔗 Live Website:

https://phenomenal-kataifi-2fe78c.netlify.app/

---

# 📂 GitHub Repository

The complete source code is available here:

🔗 GitHub:

https://github.com/randeep03/student-grade-calculator.git

---

# ✨ Features

## Student Grade Calculator

- Enter student name
- Enter multiple assignment grades
- Calculate average score
- Generate final letter grade
- Determine pass/fail status
- Responsive user interface

## Unit Testing Features

- Grade calculations separated into reusable functions
- Automated testing using Jest
- Tests for average calculation
- Tests for letter grade generation
- Tests for pass/fail validation
- Automated test execution through npm

---

# 🛠 Technologies Used

## Frontend

### HTML5
Used to create the webpage structure:

- Student input fields
- Grade input sections
- Result display area


### CSS3

Used to create:

- Modern user interface
- Responsive layout
- Colors and styling
- Card-based design


### JavaScript

Used for:

- User interaction
- Grade calculations
- Dynamic result display

---

## Backend Testing Environment

### Node.js

Used as the runtime environment for executing JavaScript outside the browser.

### Jest

Used as the JavaScript testing framework to create and execute unit tests.

Jest allows individual functions to be tested independently to ensure that the application logic works correctly.

---

# 📁 Project Structure

```
student-grade-calculator
│
├── index.html
│   └── Main webpage structure
│
├── style.css
│   └── User interface styling
│
├── script.js
│   └── Browser interaction and calculator functionality
│
├── gradeCalculator.js
│   └── Reusable grade calculation functions
│
├── gradeCalculator.test.js
│   └── Jest unit tests
│
├── package.json
│   └── Node.js project configuration and Jest scripts
│
├── package-lock.json
│   └── Dependency lock file
│
└── README.md
    └── Project documentation
```

---

# ⚙️ Installation Instructions

## Requirements

Before running this project locally, install:

- Node.js
- npm
- Visual Studio Code (recommended)


## Clone Repository

Open a terminal and run:

```bash
git clone https://github.com/randeep03/student-grade-calculator.git
```

Navigate into the project folder:

```bash
cd student-grade-calculator
```

---

# 📦 Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

This installs Jest and all required dependencies.

---

# 🧪 Running Unit Tests

To execute the Jest test suite:

```bash
npm test
```

Expected output:

```
PASS ./gradeCalculator.test.js

✓ calculates the average grade correctly
✓ returns correct letter grade A
✓ returns correct letter grade B
✓ checks if student is passing
✓ checks if student is failing

Test Suites: 1 passed
Tests: 5 passed
```

---

# 🧩 Unit Testing Explanation

The project separates grade calculation logic into individual functions:

## calculateAverage()

Calculates the average score from multiple grades.

Example:

```javascript
calculateAverage([80,90,100])
```

Returns:

```
90
```

---

## getLetterGrade()

Converts the numerical average into a letter grade.

Example:

```javascript
getLetterGrade(95)
```

Returns:

```
A
```

---

## isPassing()

Checks whether a student achieved a passing score.

Example:

```javascript
isPassing(75)
```

Returns:

```
true
```

---

# 📊 Grading Scale

| Average Score | Letter Grade |
|---------------|--------------|
| 90 - 100 | A |
| 80 - 89 | B |
| 70 - 79 | C |
| 60 - 69 | D |
| Below 60 | F |

---

# 🧪 Testing Strategy

The Jest test suite verifies that:

| Function | Test Purpose |
|-|-|
| calculateAverage() | Confirms average calculations are correct |
| getLetterGrade() | Confirms correct grade assignment |
| isPassing() | Confirms pass/fail decisions |

Automated testing helps identify errors early and improves software reliability.

---

# 🚀 Deployment

The application deployment workflow:

```
Developer Code
       |
       ↓
GitHub Repository
       |
       ↓
Netlify Hosting
       |
       ↓
Live Website
```

The frontend application is deployed through Netlify, while the testing environment runs locally using Node.js and Jest.

---

# 📚 Learning Objectives

Through this project, students learn:

- How to build interactive web applications
- How JavaScript functions can be modularized
- How Node.js supports JavaScript development
- How Jest performs automated unit testing
- How to write and execute test cases
- How GitHub supports software development workflows
- How cloud deployment works

---

# 👥 Contributors

COMP 2068 Group Tutorial Presentation Team

---

# 📄 License

This project is created for educational purposes.
