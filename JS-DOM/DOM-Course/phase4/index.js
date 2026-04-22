console.log("Form validation script loaded.");

function validateForm() {
    console.log("Validating form...");
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let age = document.getElementById("age").value.trim();
    let errorMsg = "";

    if (name === "") {
        errorMsg += "Name is required.<br>";
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorMsg += "Email is required.<br>";
    } else if (!emailPattern.test(email)) {
        errorMsg += "Please enter a valid email address.<br>";
    }

    if (password === "") {
        errorMsg += "Password is required.<br>";
    }

    if (age === "") {
        errorMsg += "Age is required.<br>";
    } else if (isNaN(age) || age <= 0) {
        errorMsg += "Please enter a valid age.<br>";
    }
    if (errorMsg !== "") {
        errorMsg += "<br>";
        document.getElementById("errorMsg").innerHTML = errorMsg;
        return false;
    }
     alert("Form submitted successfully!");
    return true;
}




// function validateForm() {
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const errorDiv = document.getElementById('errorMsg');
//     let errors = [];

//     // Validate name
//     if (nameInput.value.trim() === '') {
//         errors.push('Name is required.');
//     }

//     // Validate email
//     if (emailInput.value.trim() === '') {
//         errors.push('Email is required.');
//     } else if (!isValidEmail(emailInput.value.trim())) {
//         errors.push('Please enter a valid email address.');
//     }

//     console.log('Validation completed. Errors:', errors);
//     // Display errors
//     errorDiv.innerHTML = '';
//     if (errors.length > 0) {
//         errors.forEach(error => {
//             const errorElement = document.createElement('p');
//             errorElement.textContent = error;
//             errorElement.className = 'error';
//             errorDiv.appendChild(errorElement);
//         });
//         return false;
//     }

//     return true;
// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }
