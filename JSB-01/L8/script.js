var div = document.querySelector("div")
var input = document.querySelector("input")
function Event() {
    var image = input.value
    div.style.backgroundImage = url(image)
}