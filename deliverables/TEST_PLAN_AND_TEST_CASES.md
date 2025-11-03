# Test Plan

High-level Testing Scope / Coverage
* Login/Logout 
* Add Activity
* Filter Activities
* Sort Activities
* Toggle Status & Delete Activity

Out of scope
* back-end validation - the test site will not allow visibility into back-end (database)
* mobile validation - the test site is not available on a mobile device
* reporting - the test site doesn't have a reporting function
* anything not listed in the In Scope section is out of scope for testing

Test strategy (types of testing and why), assumptions & risks
* System testing to ensure end-to-end functionality is working (to the extent available in the test site)
* Exploratory testing to familiarize myself with the test site

Assumptions
* Test site has limited capabilities and is used for assessment only
* Test site data will not impact end users

Risks
* Requirements are clear but limited 
* QA team has limited System knowledge 
* Requirements were not reviewed with the entire team including QA which can result in different interpretations of the requiements.

# Test Cases

(Add 5–7 test cases here.)

1) Login/Logout
* Verify Email and Password fields are required and that validation message displays when user clicks Sign In and one or both fields are null
* Verify Email field validates for format (student@example.edu) and that a validation message displays when user clicks Sign In email address is invalid
* Verify Password field requires at least 6 characters and that validation message displays when user clicks Sign In and password contains less than 6 characters
* Verify that on the login page, when user enters a valid email and valid password user is logged in and on the user dashboard
* Verify that when a logged in user clicks the logout button, the user is returned to the login page.

2) Add Activity
* Verify in the Add Activiy section, when user enters: a name, a non-negative points, and chooses a status, then clicks Add, that the activity displays in the Activities list.
* Verify Activity name and Points fields are required and that validation message displays when user clicks Add and one or both fields are null, and that acticity is not added to the Activities list.

3) Filter Activities - Assumption multiple activities are listed
* Verify when I select “Completed” from the filter dropdown, then only the completed activities display in the Activities list.
* Verify when I select “Planned” from the filter dropdown, then only the planned activities display in the Activities list.

4) Sort Activities
* Verify when I select “Name” from the sort dropdown, the activities are sorted alphabetically by name.
* Verify when I select “Points” from the sort dropdown, the activities are sorted numerically by points.

5) Toggle Status & Delete Activity
* Verify when I click “Toggle Status” on a Completed activity, the status will change to Planned.
* Verify when I click “Toggle Status” on a Planned activity, the status will change to Completed.
* Verify when I click “Delete” on an activity, the activity will be removed from the list.