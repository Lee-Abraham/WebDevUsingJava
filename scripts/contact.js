// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById("submit-button").addEventListener("click", thank);
function thank() {
    document.getElementById("contact-page").innerHTML =  "Thank you for you message";
    lee.style.fontSize = "24px";
}
const lee = document.getElementById("contact-page");
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

