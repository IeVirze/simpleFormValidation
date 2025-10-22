# Registration from with validation and session storage

## Overview
This project is a simple front-end registration form built using HTML, CSS, and JavaScript.
It includes real-time input validation, visual feedback (green/red borders), and session storage integration to preserve data between page reloads during the session. 

It was originally created as part of a study exercise, and later refined as a portfolio project to demonstrate simple client-side form handling and validation.

## Main features

- Real-time validation while typing: display visual cue (red/green border) if the desired format is reached
- Validation on submit action after "Saglabāt" button is clicked
- Validation rules:
    - Name and Surname: at least 2 letters, only alphabetic characters
    - Email: must include the “@” symbol
    - Age: must be selected from a dropdown list
    - Agreement checkbox must be checked
- Error messages displayed below invalid fields on form submit
- Data stored in Session Storage (deleted when a new form is saved): Session storage provide the ability to add a Welcome window right after a registration form and other features that benefit from instant feedback to user but does not necessarily require server side communication
- “Parādīt” button displays saved data
- “Aizvērt” button hides the displayed data
- “Parādīt” button disabled until form is valid
- Form automatically clears and resets after successful submission

## What I Learned

* Implementing client-side validation using JavaScript and regular expressions
* Managing form state and interactivity through DOM manipulation
* Using Session Storage to temporarily store and retrieve user data
* Providing real-time visual feedback for better user experience

## Technologies Used

_HTML5_ – structure
_CSS3_ – layout and visual feedback
_JavaScript (ES6)_ – validation logic and session storage
