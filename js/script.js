welcomeMessage() ;

function welcomeMessage() {
    let userName = prompt("please enter Name:");

    if (userName ==='' || userName === null) {
        userName = "Guest";
    }
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
} 
function validateForm() {
}