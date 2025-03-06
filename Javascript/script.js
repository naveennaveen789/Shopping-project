let sidenav = document.querySelector(".side-navbar");
// let useless = document.querySelector('.navbar-menu-toggle')

// console.log(sidenav);

 sidenav.style.left = "-60%";

function showNavbar() {
  sidenav.style.left = "0%";
  console.log("ok");
}

// useless = !closeNavbar
function closeNavbar() {
  sidenav.style.left = "-60%";
  console.log("done");

}






// User

let addbtn = document.getElementById("namebutton");
let showtext = document.getElementById("userprofile");

addbtn.onclick = function () {
  userdetails();
};

// del.onclick = function() {
//     localStorage.clear();
// }
function userdetails() {
  // alert("hi")
  let inputName = document.getElementById("input").value;

  localStorage.setItem("username ", inputName);
  showtext.textContent = inputName;
}

if (!localStorage.getItem("username")) {
  userdetails();
} else {
  var name = localStorage.getItem("username");
  showtext.textContent = inputName;
}
