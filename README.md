# QA Take-Home (1–2 hours)

Welcome! This is a small student engagement portal meant for QA evaluation.
It contains a few functional quirks/bugs by design. Please spend **~60 minutes**
on the core tasks, with an optional **~30 minutes** for automation.

## What’s In Scope

The **Student Engagement Portal** is a simple web app that simulates how students track co-curricular activities outside of the classroom. Its purpose is to let you practice designing test plans, identifying bugs, and writing automation.

Here are the primary expected behaviors, expressed as user stories with acceptance criteria:

### Login/Logout
**User Story:** As a student, I want to log in and log out so that I can securely access my activities.

- **Given** I am on the login page, **when** I enter a valid email and password with at least 6 characters, **then** I should be logged in and see the dashboard.  
- **Given** I am logged in, **when** I click the logout button, **then** I should be returned to the login page.

### Add Activity
**User Story:** As a student, I want to add an activity so that I can track my engagement.

- **Given** I am on the dashboard, **when** I enter a valid name, non-negative points, and choose a status, **then** the activity should appear in my activity list.  
- **Given** I leave the name blank or enter negative points, **when** I try to submit, **then** I should see an error and the activity should not be added.

### Filter Activities
**User Story:** As a student, I want to filter activities so I can see only those that match a specific status.

- **Given** I have multiple activities, **when** I select “Completed” from the filter dropdown, **then** only completed activities should be shown.  
- **Given** I select “Planned”, **when** I view the list, **then** only planned activities should be shown.

### Sort Activities
**User Story:** As a student, I want to sort activities so that I can view them in an order that helps me understand my progress.

- **Given** I select “Name” from the sort dropdown, **when** I view the list, **then** activities should be sorted alphabetically by name.  
- **Given** I select “Points”, **when** I view the list, **then** activities should be sorted numerically by points.

### Toggle Status & Delete Activity
**User Story:** As a student, I want to update or remove activities so that my records remain accurate.

- **Given** an activity is in the list, **when** I click “Toggle Status”, **then** its status should switch between Completed and Planned.  
- **Given** an activity is in the list, **when** I click “Delete”, **then** it should be removed from the list.

## Your Tasks

### Part A — Test Plan & Test Cases (Primary)

Your ability to translate acceptance criteria into a test plan is crucial. Based on the user stories above, please do the following:

1. Review the **What’s In Scope** section to understand the application's objectives and intended use cases.
1. In `deliverables/TEST_PLAN_AND_TEST_CASES.md`, write a concise **test plan** (≤ 1 page) and add **5–7 test cases**:
   - Scope (what you will / won’t test)
   - Test strategy (types of testing and why), assumptions & risks
   - Coverage areas (auth, activities, sorting/filtering, state updates)
   - Clear preconditions, steps, expected vs. actual results

### Part B — Bug Reports (Primary)
Log **3–5 distinct issues** you find in `deliverables/BUG_REPORTS.md`:
- For each: title, severity, repro steps, expected vs. actual, environment, evidence (GIF/screenshot or notes).

Please **do not** fix these in the app; report them.

### Part C — Automation (Optional but Encouraged)
Using **Cypress**, implement **1–2 small E2E tests** in `cypress/e2e/` that
demonstrate your approach to automation (readability, selector strategy,
assertions). Focus on one flow end-to-end, or targeted high-value checks.

> Hint: You may open Cypress with `npm run cypress:open` and use the UI
> to drive test authoring quickly.

## Setup

1. Download this repository via zip file or clone it on your local machine
1. Ensure Node 18+ is installed.
    - Recommended to use nvm (Node Version Manager). [Here is a link for Linux/Mac machines](https://github.com/nvm-sh/nvm), and a separate [link for Windows machines](https://github.com/coreybutler/nvm-windows)
2. Install deps: `npm install`
3. Start the app: `npm start`
4. App runs at http://localhost:5173

## Deliverables (commit to repo or zip)

- `deliverables/TEST_PLAN_AND_TEST_CASES.md`
- `deliverables/BUG_REPORTS.md`
- `cypress/e2e/*.cy.js`

You can optionally provide the test plan, test cases, and bug reports in a PDF. If you use any tooling or libraries beyond what’s included, note it in your plan. If sending a zip you can remove the node_modules directory to reduce the size of the folder, or just send over the test files that you modified.

## Solutions are Judged on

Your submission will be reviewed with an emphasis on **clarity, structure, and signal** rather than volume. Specifically, we look for:

- **Test Plan Quality**  
  Clear scope, pragmatic approach, and thoughtful coverage of high-value areas. Prioritization over exhaustive checklists.  

- **Test Case Design**  
  Well-structured, reproducible cases with preconditions, steps, and expected vs. actual results. Inclusion of both positive and negative paths.  

- **Bug Reports**  
  Actionable write-ups that make it easy for a developer to reproduce and fix the issue. Concise repro steps and evidence where useful.  

- **Automation Approach (Optional but Encouraged)**  
  Cypress tests that are readable, stable, and demonstrate sound selector strategy and assertions. Can another developer review your code and easily understand the intent/purpose?

- **Communication & Professionalism**  
  Clear, concise written communication. Organized deliverables that would fit naturally into a real product team’s workflow.  
