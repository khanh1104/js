var nameInput = document.querySelector("#fullname");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
function checkInput() {
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        alert("Please fill out all fields");
    } else {
        if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters")
        }
    }
}