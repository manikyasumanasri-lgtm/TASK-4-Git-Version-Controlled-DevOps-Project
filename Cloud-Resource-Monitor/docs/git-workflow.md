# Git Workflow Documentation

This document outlines the Git and GitHub workflow that will be performed during this assignment. This serves as a guide and a checklist for demonstrating version control proficiency.

## 1. Git Initialization
- Initialize a local Git repository in the root directory: `git init`
- Connect the local repository to a remote repository on GitHub using: `git remote add origin <url>`

## 2. Creating Branches
- We will utilize a standard branching strategy.
- Keep the `main` branch stable and deployable.
- Create a `dev` branch for active development: `git branch dev`
- Switch to the `dev` branch: `git checkout dev` (or `git switch dev`)

## 3. Feature Development
- For every new feature (e.g., adding a new dashboard widget), create a specific feature branch from `dev`: `git checkout -b feature/widget-name`
- Make necessary code changes isolated in this branch.

## 4. Creating Commits
- Stage files to be committed: `git add .`
- Create meaningful, descriptive commits: `git commit -m "feat: add EC2 monitoring table"`
- Push branches to the remote repository: `git push -u origin feature/widget-name`

## 5. Pull Requests
- Once a feature is complete, open a Pull Request (PR) on GitHub from the `feature` branch into the `dev` branch.
- Review the code changes in the PR interface.

## 6. Merging Branches
- After PR approval, merge the `feature` branch into `dev`.
- Once `dev` has reached a stable milestone, open a PR to merge `dev` into `main`.

## 7. Merge Conflict Resolution
- If two branches modify the same lines of code, a merge conflict will occur.
- Resolve conflicts locally by fetching the latest changes, checking out the branch, and editing the conflicted files to keep the desired changes.
- Stage the resolved files and complete the merge commit.

## 8. Git Tags
- Use Git tags to mark release versions on the `main` branch.
- Create a tag: `git tag -a v1.0.0 -m "Initial Release"`
- Push tags to remote: `git push origin --tags`

## 9. .gitignore
- The project includes a `.gitignore` file to ensure that logs, OS-specific files (like `.DS_Store`), and editor configurations are NOT tracked by Git.

## 10. Summary
This workflow ensures isolated development, prevents breaking the `main` application, and establishes a clear history of incremental changes and versions.
