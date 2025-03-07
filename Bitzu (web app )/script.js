
// JavaScript for Navigation Button Functionality
// JavaScript for Search Bar Navigation
document.querySelector("button").onclick = function () {
    // Get the search query entered by the user
    const searchQuery = document.querySelector("input[type='text']").value.trim().toLowerCase();

    // Define a mapping of search terms to their corresponding page URLs
    const pageMapping = {
        "home": "index.html",
        "about": "about.html",
        "services": "services.html",
        "careers": "career.html"
    };

    // Check if the search query matches any page
    if (pageMapping[searchQuery]) {
        // Redirect to the corresponding page
        window.location.href = pageMapping[searchQuery];
    } else if (searchQuery === "") {
        alert("Please enter a search term.");
    } else {
        document.write("No matching page found. Please try a different search term.");
    }
};



document.querySelector(".accountbutton").addEventListener("click", function () {
    window.location.href = "login.html"; // Redirect to the login page
});


// document.getElementById("login-btn").onclick = function () {
//     const username = document.getElementById("username").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Error message containers
//     const usernameError = document.getElementById("username-error");
//     const passwordError = document.getElementById("password-error");

//     // Clear previous error messages
//     usernameError.textContent = "";
//     passwordError.textContent = "";

//     let isValid = true;

//     // Validation checks
//     if (!username) {
//         usernameError.textContent = "Username is required.";
//         isValid = false;
//     }

//     if (!password) {
//         passwordError.textContent = "Password is required.";
//         isValid = false;
//     }

//     // Successful login (simple example)
//     if (isValid) {
//         if (username === "admin" && password === "password123") {
//             document.write("Login successful!");
//             window.location.href = "index.html"; // Redirect to home page
//         } else {
//             alert("Invalid username or password.");
//         }
//     }
// };