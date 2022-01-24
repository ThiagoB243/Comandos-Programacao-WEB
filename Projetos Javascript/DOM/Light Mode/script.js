var h1 = document.getElementById("page-title");
var button = document.getElementById("mode-selector");
var footer = document.querySelector("footer");
var body = document.querySelector("body");

button.addEventListener("click", function darkMode() {
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
});