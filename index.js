let nav = document.getElementById("nav-btn");
let closeNav = document.getElementById("nav-close");
let list = document.getElementById("whole-link");

function click(){
    nav.style.display = "none";
    closeNav.style.display = "block"
    list.style.display = "block"
}

nav.addEventListener("click", click);

function closeBtn(){
    list.style.display = "none";
    closeNav.style.display = "none"
    nav.style.display = "block";
}

closeNav.addEventListener("click", closeBtn);