let localStorage = window.localStorage;

function check(input) {
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Passwords do not match.');
    } else {
        input.setCustomValidity('');
    }
}

function saveUserLoginEmail(input) {
    var email = document.getElementById("email").value;
    localStorage.setItem("user", email);
}

function saveUserCreateAccountEmail(input){
    var email = document.getElementById("mail").value;
    localStorage.setItem("newUserEmail", email);
}

function returnUserEmail(input){
    if(localStorage.getItem("newUserEmail") === null){
        return localStorage.getItem("user");
    }
    else return localStorage.getItem("newUserEmail");
}

function clearStorage() { localStorage.clear();}



