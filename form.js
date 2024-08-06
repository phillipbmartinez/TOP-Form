const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

getPassword();

function getPassword(){
    let getPasswordPrompt = prompt("Please enter your password.")
    password.value = getPasswordPrompt;
    let confirmPasswordPrompt = prompt("Please confirm your password.");
    confirmPassword.value = confirmPasswordPrompt;

    if (getPasswordPrompt === confirmPasswordPrompt){
        console.log(getPasswordPrompt);
        console.log(confirmPasswordPrompt);
        password.classList.add("passwordValid");
        confirmPassword.classList.add("passwordValid");
        
    }
    else{
        password.classList.add("passwordInvalid");
        confirmPassword.classList.add("passwordInvalid");
    }
}