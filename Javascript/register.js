document.getElementById('registerform').addEventListener("submit", (e) => {
    e.preventDefault();

    let userEmail = document.getElementById('email').value
    let password = document.getElementById('password').value
    let username = document.getElementById("username").value

    if(localStorage.getItem(userEmail)){
        alert("This User Name Already Taken, Try Another One...")

        return
    }

    localStorage.setItem(userEmail,password,username)
    alert("User Register Successfully !")

    document.location.href = '../Login/login.html'
})