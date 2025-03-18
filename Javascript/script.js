let sidenav = document.querySelector(".side-navbar");
 
sidenav.style.left = "-60%";

function showNavbar() {
  sidenav.style.left = "0%";
  console.log("moveright");
}

// useless = !closeNavbar
function closeNavbar() {
  sidenav.style.left = "-60%";
  console.log("moveleft");
}

// User
 


document.getElementById('namebutton').addEventListener("submit" ,(e) => {
  e.preventDefault();

  let inputName = document.getElementById("input").value;

   if(inputName && inputName === "" ){
      alert("User Request sending successfully!")

    }else{
      alert("we need your experince and morethen information , Thank you for the information ! ")
      return
      
    }

})

///reset or logout

let reset = document.getElementById("logoutpage").addEventListener("reset", (e) => {
    e.preventDefault();
    console.log("clicked");

    alert("User Logout Conformation !");

    localStorage.clear();

    document.location.href = "../Login/login.html";
  });
//sidenav-bar
document.getElementById('logout').addEventListener("reset", (e) => {
  e.preventDefault();
  
   alert("User Logout Conformation !");
  localStorage.clear();
  console.log("clicked");

  document.location.href = '../Login/login.html'
})
