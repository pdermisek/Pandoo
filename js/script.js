const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeButton = document.querySelector(".nav__button-close")
const allDivs = document.querySelectorAll("div:not(.nav-links)");



hamburger.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    for(var i=0; i<allDivs.length; i++){
        allDivs[i].classList.toggle("displayOff");
    } 
});

closeButton.addEventListener('click', (e)=>{
    navLinks.classList.toggle("active");
    for(var i=0; i<allDivs.length; i++){
        allDivs[i].classList.toggle("displayOff");
    }
})