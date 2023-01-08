var usernameInput = document.getElementById("username_input");
var passwordInput = document.getElementById("password_input");
var errorMessage = document.getElementById("error");
function login() {
    if (usernameInput.value.length < 5) {
        errorMessage.innerText = "Username must be at least 5 characters";
        errorMessage.style.display = "block";
    } else {
        if (passwordInput.value.length < 8) {
            errorMessage.innerText = "Password must be at least 8 characters";
            errorMessage.style.display = "block";
        } else {
            if (usernameInput.value != "khanh") {
                errorMessage.innerText = "Invalid username";
                errorMessage.style.display = "block";
            } else {
                if (passwordInput.value != "11042011") {
                    errorMessage.innerText = "Invalid password";
                    errorMessage.style.display = "block";
                } else {
                    window.location.href = '../HTML/user.html';
                }
            }
        }
    }
}