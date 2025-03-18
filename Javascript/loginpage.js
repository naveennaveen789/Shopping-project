document.getElementById("Loginform").addEventListener("submit" ,(e) => {
    e.preventDefault();

    let userEmail = document.getElementById("email").value
    let password = document.getElementById("password").value
    // console.log(password);
    

    let storePassword = localStorage.getItem(userEmail)

    if(storePassword === null){
        alert("User Not Register")

    }else{

        if(storePassword === password){
            alert("Login Successfully !")

            document.location.href = '../HTML/index.html'
        }
        else{
            alert('Invalid Password !')

            return;
        }
    }


})