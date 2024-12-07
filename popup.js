// Storing credentials
document.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("savedMessage").style.display = "block";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    chrome.storage.sync.set({ username, password }, function (result) {
        if (chrome.runtime.lastError) {
            console.error('Error storing credentials:', chrome.runtime.lastError);
        }
        else {
            console.log('Credentials stored successfully');
            chrome.storage.sync.get(['username', 'password'], function (items) {
                const storedUsername = items.username;
                const storedPassword = items.password;
                // alert(storedUsername);
                // alert(storedPassword);
            });
        }
    });
})

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('change', () => {
    if (togglePassword.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});