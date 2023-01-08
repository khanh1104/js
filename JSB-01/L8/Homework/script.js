var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
function checkInput() {
    if (nameInput.value === "") {
        alert("Please fill the name field!");
    } else {
        if (emailInput.value === "") {
            alert("Please fill the email field!");
        } else {
            if (passwordInput.value === "") {
                alert("Please fill the password field!");
            } else {
                alert("Created account successfully!");
            }
        }
    }
}