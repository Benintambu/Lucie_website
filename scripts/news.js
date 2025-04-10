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
        logo.src = '../images/LLucia_bl.jpg'
    } else {
        darkButton.src = "../images/moon.png"
        logo.src = '../images/LLucia_wh.jpg'
    }
}