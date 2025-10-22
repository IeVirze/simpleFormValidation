// Define constants by getting the values from an HTML document inputfields

const form = document.getElementById('regForm'); //Registration form id
const showBtn = document.getElementById('showBtn'); //Button for showing stored values
const outputBox = document.getElementById('outputBox'); // Output box that show stored values id
const closeOutput = document.getElementById('closeOutput'); // Click on close output box item in output box


/*
Decision to use session storage for this exercise based on the following criteria: 
-- Session storage is temporary storage of a browserr that does not require backend data tables
-- Session storage stores the values as long as session is ongoing, typically it is defined by consecutive actions that must be taken in order to start or end the said session
-- Session storage usage allows flexibly fulfilling the goal for the exercise and it allows resettinng values
-- There is no limit how many times you can check values stored in session storage

Note: According to GDPR strictest understanding unencrypted data that is deemed personal data for private individuals cannot be legally stored in session storage.
*/


    // Helper regex
    const nameRegex = /^[A-Za-zĀ-ž]{2,}$/; // allows Latvian letters

    // Validation functions
    function validateField(input, regex, errorId) {
      const error = document.getElementById(errorId);
      if (regex.test(input.value.trim())) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        error.style.display = "none";
        return true;
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
      }
    }

    function validateEmail(input) {
      const error = document.getElementById('epastsError');
      if (input.value.includes('@')) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        error.style.display = "none";
        return true;
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        return false;
      }
    }

    function validateAge(select) {
        if (select.value) {
        select.classList.add("valid");
        select.classList.remove("invalid");
        return true;
        } else {
        select.classList.add("invalid");
        select.classList.remove("valid");
        return false;
        }
    }


    function validateCheckbox(input) {
      const error = document.getElementById('noteikumiError');
      if (input.checked) {
        error.style.display = "none";
        return true;
      } else {
        error.style.display = "block";
        return false;
      }
    }

    // Real-time validation
    document.getElementById('vards').addEventListener('input', e => validateField(e.target, nameRegex, 'vardsError'));
    document.getElementById('uzvards').addEventListener('input', e => validateField(e.target, nameRegex, 'uzvardsError'));
    document.getElementById('epasts').addEventListener('input', e => validateEmail(e.target));
    vecums.addEventListener('change', () => validateAge(vecums));


    // Form submission validation
    form.addEventListener('submit', e => {
      e.preventDefault();

      const vardsValid = validateField(document.getElementById('vards'), nameRegex, 'vardsError');
      const uzvardsValid = validateField(document.getElementById('uzvards'), nameRegex, 'uzvardsError');
      const epastsValid = validateEmail(document.getElementById('epasts'));
      const vecumsValid = validateAge(vecums);
      const noteikumiValid = validateCheckbox(document.getElementById('noteikumi'));

    //Disable show button if the input is not valid for the form
      document.getElementById('showBtn').disabled = !(vardsValid && uzvardsValid && epastsValid && vecumsValid && noteikumiValid);

      // Show errors for invalid inputs
      document.getElementById('vardsError').style.display = vardsValid ? 'none' : 'block';
      document.getElementById('uzvardsError').style.display = uzvardsValid ? 'none' : 'block';
      document.getElementById('epastsError').style.display = epastsValid ? 'none' : 'block';
    
    
        const errorForm = document.getElementById('validError');
        const validForm = document.getElementById('validForm');
      if (!vardsValid || !uzvardsValid || !epastsValid || !vecumsValid || !noteikumiValid) {
        
        errorForm.style.display = 'block';
        validForm.style.display = 'none';
        return;
      } else {
        
        validForm.style.display = 'block';
        errorForm.style.display = 'none';
      }

      // Collect data
      const formData = {
        vards: document.getElementById('vards').value,
        uzvards: document.getElementById('uzvards').value,
        epasts: document.getElementById('epasts').value,
        vecums: document.getElementById('vecums').value,
        komentars: document.getElementById('komentars').value,
        noteikumi: document.getElementById('noteikumi').checked
      };

      // Reset and save new session data
      sessionStorage.clear();
      sessionStorage.setItem('formData', JSON.stringify(formData));
 //Clear input fields after saving
      form.reset();

      //Remove color borders
      document.querySelectorAll('input, textarea, select').forEach(el => {
        el.classList.remove('valid', 'invalid');

    });

         
      });


    // Show stored data
    showBtn.addEventListener('click', () => {
      const storedData = sessionStorage.getItem('formData');
      if (!storedData) {
        return;
      }
      const data = JSON.parse(storedData);
      document.getElementById('outVards').textContent = data.vards;
      document.getElementById('outUzvards').textContent = data.uzvards;
      document.getElementById('outEpasts').textContent = data.epasts;
      document.getElementById('outVecums').textContent = data.vecums;
      outputBox.style.display = 'block';
    });

    closeOutput.addEventListener('click', () => {
      outputBox.style.display = 'none';
    });

    //Show registration rules
    showRules.addEventListener('click', () => {
        rules.style.display = 'block';


    });

    closeRules.addEventListener ('click', () => {
        rules.style.display = 'none';
    })