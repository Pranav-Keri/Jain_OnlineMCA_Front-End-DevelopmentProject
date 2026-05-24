const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {

        event.preventDefault();

        let start = document.getElementById('startDate').value;
        let end = document.getElementById('endDate').value;
        let description = document.querySelector('textarea').value;

        if (!start || !end || !description) {
            alert("Please fill all fields");
            return;
        }

        if (end <= start) {
            alert("End date must be after start date");
            return;
        }

        if (description.length < 50 || description.length > 500) {
            alert("Description must be between 50 and 500 characters");
            return;
        }

        alert("Booking Successful!");
    });
}

const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {

        event.preventDefault();

        let fullname = document.getElementById('fullname').value;
        let contact = document.getElementById('contact').value;
        let password = document.getElementById('password').value;

        if(fullname.length < 3) {
            alert("Full name must contain at least 3 characters");
            return;
        }

        if(contact.length != 10) {
            alert("Contact number must be 10 digits");
            return;
        }

        if(password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        alert("Registration Successful!");
    });
}

const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {

        event.preventDefault();

        alert("Login Successful!");
    });
}