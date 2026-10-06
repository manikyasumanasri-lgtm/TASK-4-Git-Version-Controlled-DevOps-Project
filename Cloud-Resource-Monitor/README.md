# ☁️ Cloud Resource Monitor

## 📌 Project Overview

Cloud Resource Monitor is a web-based dashboard that simulates monitoring of cloud resources such as Amazon EC2 instances, Amazon S3 buckets, AWS Lambda functions, and system alerts.

The project uses mock/local JSON data and does not connect to real AWS resources.

This project was created as part of **Task 4: Build a Version-Controlled DevOps Project with Git** to practice Git and GitHub version-control workflows.

---

## 🎯 Project Objective

The main objective of this project is to understand and demonstrate Git best practices, including:

- Git repository initialization
- Branching
- Meaningful commits
- Feature development
- Pull Requests
- Branch merging
- Git tags
- `.gitignore`
- Markdown documentation
- GitHub repository management

---

## 🚀 Features

- 📊 Cloud resource dashboard
- 🖥️ EC2 instance monitoring
- 🪣 S3 bucket monitoring
- ⚡ Lambda function monitoring
- 🚨 Cloud resource alerts
- 🔍 Resource search/filtering
- 🔄 Dashboard refresh functionality
- 📱 Responsive user interface
- 📄 Local JSON-based mock data

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub

---

## 📁 Project Structure

```text
Cloud-Resource-Monitor/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
├── data/
│   └── resources.json
│
└── docs/
    └── git-workflow.md
```

## How to Run
1. Clone the repository to your local machine.
2. Open the project folder.
3. Open `index.html` in your web browser (e.g., Chrome, Firefox).
   - *Tip: If you use VS Code, you can use the "Live Server" extension to serve the files locally, which helps avoid any browser CORS issues when fetching the local JSON file.*

## Mock Data
**Important**: This application uses **strictly simulated/mock data**. No real AWS resources, APIs, credentials, or paid services are connected or required. The data is entirely loaded from `data/resources.json`.

## Git Workflow
This project is built to demonstrate version control proficiency. Git and GitHub will be used to demonstrate:
- Branching strategies (`main`, `dev`, `feature/*` branches)
- Incremental commits with descriptive messages
- Pull Requests (PRs) and code reviews
- Branch merging and conflict resolution
- Git tags for releases

Please refer to `docs/git-workflow.md` for a complete outline of the Git practices applied to this repository.

## Learning Outcome
Through this assignment, the following Git concepts are practiced:
- Repository initialization and configuration
- Local vs Remote repositories (GitHub)
- Working with branches to isolate feature development
- Pull requests as a mechanism for review
- Resolving merge conflicts effectively
- Using `.gitignore` to prevent tracking of unnecessary files
