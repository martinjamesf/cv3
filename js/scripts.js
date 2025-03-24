/* js/scripts.js */
console.log("Website loaded");

/* js/scripts.js */
function validateForm() {
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("first-name").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) {
        alert("Please enter your first name.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
