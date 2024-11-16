$('#login').click(function(event) {
    event.preventDefault();

    // Get login input
    let loginName = $('#user').val().trim();
    let loginPassword = $('#pass').val().trim();

    // Retrieve stored credentials
    let storedName = localStorage.getItem("registeredName");
    let storedPassword = localStorage.getItem("registeredPassword");

    // Check if credentials match
    if (loginName === storedName && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboardForm.html";
    } else {
        alert("Invalid email or password.");
    }
});
