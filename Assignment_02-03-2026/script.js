document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMsg = document.getElementById('successMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Helper functions
    const setError = (input, errorEl, message) => {
        input.classList.add('error');
        input.classList.remove('success');
        errorEl.textContent = message;
    };

    const setSuccess = (input, errorEl) => {
        input.classList.remove('error');
        input.classList.add('success');
        errorEl.textContent = '';
    };

    // Validation logic
    const validateName = () => {
        const value = nameInput.value.trim();
        if (value === '') {
            setError(nameInput, nameError, 'Name is required.');
            return false;
        } else {
            setSuccess(nameInput, nameError);
            return true;
        }
    };

    const validateEmail = () => {
        const value = emailInput.value.trim();
        if (value === '') {
            setError(emailInput, emailError, 'Email is required.');
            return false;
        } else if (!emailRegex.test(value)) {
            setError(emailInput, emailError, 'Please enter a valid email address.');
            return false;
        } else {
            setSuccess(emailInput, emailError);
            return true;
        }
    };

    const validatePassword = () => {
        const value = passwordInput.value;
        if (value === '') {
            setError(passwordInput, passwordError, 'Password is required.');
            return false;
        } else if (value.length < 8) {
            setError(passwordInput, passwordError, 'Password must be at least 8 characters long.');
            return false;
        } else {
            setSuccess(passwordInput, passwordError);
            return true;
        }
    };

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {
            // Success!
            successMsg.textContent = 'Form submitted successfully!';
            successMsg.style.display = 'block';
            
            // Optionally clear the form
            form.reset();
            
            // Remove success classes after submission
            [nameInput, emailInput, passwordInput].forEach(input => {
                input.classList.remove('success');
            });

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        } else {
            // If any field is invalid, ensure success message is hidden
            successMsg.style.display = 'none';
        }
    });
});
