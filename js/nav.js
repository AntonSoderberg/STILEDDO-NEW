var nav = document.getElementById("nav");
var logo = document.getElementById("logo");

window.onscroll = function() {
    
    var vh = window.innerHeight / 100;

    if (window.scrollY > (vh * 40)) {

        nav.style.top = "0";
        nav.style.position = "fixed";
        nav.style.textAlign = "left";
        nav.style.paddingLeft = "16vw";

        logo.style.left = "8vw";
        logo.style.top = "50px";
        logo.style.position = "fixed";
        logo.style.width = "14vw";
    }

    if (window.scrollY < (vh * 40)) {

        nav.style.top = "60vh";
        nav.style.position = "absolute";
        nav.style.textAlign = "center";
        nav.style.paddingLeft = "0";

        logo.style.left = "50%";
        logo.style.top = "50%";
        logo.style.position = "absolute";
        logo.style.width = "40vw";
    }
}