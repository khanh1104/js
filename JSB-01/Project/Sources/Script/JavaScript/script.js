let topButton = document.getElementById("top");
let submitButton = document.getElementById("subscribe");
let emailInput = document.getElementById("email_input");
let errorMessage = document.getElementById("error")
window.onscroll = function () { scroll() };
function scroll() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function newsletter() {
    if (emailInput.value.includes("@gmail") == false) {
        errorMessage.innerText = "Invalid email address"
        errorMessage.style.display = "inline"
    } else {
        if (emailInput.value.includes(".com") == false) {
            errorMessage.innerText = "Invalid email address"
            errorMessage.style.display = "inline"
        } else {
            if (emailInput.value.length < 12) {
                errorMessage.innerText = "‎‎‎‏‏‏‏‎‎Invalid email address"
                errorMessage.style.display = "inline"
            } else {
                errorMessage.innerText = "‎‎‎‏‏‏‏‎Thank you for signing up!"
                errorMessage.style.color = "green"
                errorMessage.style.display = "inline"
            }
        }
    }
}