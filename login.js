// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission for demo purposes
        
        // Get input values
        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        // Basic validation
        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate a login process (you can replace this with actual login logic)
        if (username === "admin" && password === "admin123") {
            alert("Login successful!");
            // Redirect to the dashboard or another page
            window.location.href = "management/management.html";
        } else {
            alert("Invalid username or password.");
        }
    });
});
