/* Dark-mode */

/* Dark Mode Button */
var darkButton = document.querySelector(".dark_mode")

/* Home Icon */
var homeICon = document.querySelector(".home_icon")

/* Email Icon */
var emailIcon = document.querySelector(".email_icon")

/* Phone Icon */
var phoneIcon = document.querySelector(".phone_icon")

// Logo
var logo = document.querySelector('.logo')

/* Dark Mode Transition */
darkButton.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkButton.src = "../images/sun.png"
        homeICon.src = "../images/homeW.png"
        emailIcon.src = "../images/emailW.png"
        phoneIcon.src = "../images/phoneW.png"
        logo.src = '../images/LLucia_bl.jpg'
    } else {
        darkButton.src = "../images/moon.png"
        homeICon.src = "../images/homeB.png"
        emailIcon.src = "../images/emailB.png"
        phoneIcon.src = "../images/phoneB.png"
        logo.src = '../images/LLucia_wh.jpg'
    }
}

gsap.registerPlugin(ScrollTrigger)

/* Gsap for mobile menu */;
const button = document.querySelector('.menu_btn')
const close = document.querySelector('.close')

const animMenu = gsap.to(".menu_phone", {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    duration: 1,
    paused: true,
})

/* Hide and display Mobile Menu */
button.addEventListener('click', () => animMenu.play())
close.addEventListener('click', () => animMenu.reverse())

/* Backround slider hero */
gsap.to('.hero_content', {

})
