 document.getElementById('RegistrationForm').addEventListener('submit',function(event){
    event.preventDefault();

    clearError();

    const userName = document.getElementById("username").value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('Password').value;
    const conformpassword = document.getElementById('ConformPassword').value;


    let isValid = true;

    if(userName.length<3){
        showError("usernameError", "Username must be atlest 3 characters long")
        isValid =false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailPattern.test(email)){
        showError("emailError", "Please enter a valid email address.")
        isValid =false;
    }

    if(password.length<6){
        showError("PasswordError", "Password must be atleast 6 characters long.")
        isValid =false;
        
    }

    if(password!=conformpassword){
        showError("ConformPasswordError", "Password do not match.")
        isValid = false;
    }

    if(isValid){
        alert("Login Successfull!");
        document.getElementById("RegistrationForm").reset();
    }

});

function showError(elementId,message){
    const errorElement = document.getElementById(elementId);
    errorElement.textContent=message;
}

function clearError(){
    const errorElement = document.querySelectorAll(".error");
    errorElement.forEach(element => element.textContent = "");
}