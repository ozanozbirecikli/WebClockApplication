function check(input) {
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Passwords do not match.');
    } else {
        input.setCustomValidity('');
    }
}