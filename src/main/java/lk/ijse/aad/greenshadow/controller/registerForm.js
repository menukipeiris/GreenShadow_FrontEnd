$(document).ready(function() {
    // Sign up functionality
    $('#signup').click(function (event) {
        event.preventDefault();

        // Get values from the form
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        // Simple validation
        if (!firstName || !lastName || !email || !password) {
            $('#error-message').text("All fields are required.");
            return;
        }

        // Save user data in local storage (for demonstration)
        localStorage.setItem("registeredName", firstName);
        localStorage.setItem("registeredPassword", password);
        alert("Registration successful! Please log in.");

        // Redirect to login page
        window.location.href = "loginForm.html";
    });
});