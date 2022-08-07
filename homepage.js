var menuIcon = document.querySelector(".header__navbar-icon--sidebar");
var sidebar = document.querySelector(".grid__column-2");
var sidebar2 = document.querySelector(".category-item")

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    sidebar2.classList.toggle("small-sidebar")
}

// Home Page not Login

// let videoPage = document.querySelector(".home-browse__link--sign");

// videoPage.onclick = () =>{
//     alert("You are not login Please login to watch video!! ");
// }
