const readlineSync = require('readline-sync'); // Importing the readline-sync module

// Parameters for valid password
function validPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
}


let password = "";

// Loop to run for a vlaid password
while (!validPassword(password)) {
    password = readlineSync.question("Enter a password: ");
    if (!validPassword(password)) {
        console.log("Password is not valid. Try again.");
    }
}

// If password is valid, message will be displayed
console.log("Password is valid.");