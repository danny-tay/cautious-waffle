var navBar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 10) {
        navBar.style.backgroundColor = "white";
    }
    else {
        navBar.style.backgroundColor = "rgba(248, 249, 250, 0.7)";
    }
},false);