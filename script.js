// On clicking the toggle only the side navbar should show

var showsidebar = document.querySelector(".nav-bar-toggle");
var sidenavbar = document.querySelector(".side-nav-bar");

showsidebar.addEventListener("click", function(event){
    event.preventDefault();
    sidenavbar.style.left = "0";
})

function closeSideNav(event)
{
    event.preventDefault();
    sidenavbar.style.left = "-60%";
}

