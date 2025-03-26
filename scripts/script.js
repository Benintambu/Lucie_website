document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    /* Dark Mode Button */
    var darkButton = document.querySelector(".dark_mode")

    /* Home Icon */
    var homeICon = document.querySelector(".home_icon")

    /* Email Icon */
    var emailIcon = document.querySelector(".email_icon")

    /* Phone Icon */
    var phoneIcon = document.querySelector(".phone_icon")

    /* Dark Mode Transition */
    darkButton.onclick = function(){
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            darkButton.src = "../images/sun.png"
            homeICon.src = "../images/homeW.png"
            emailIcon.src = "../images/emailW.png"
            phoneIcon.src = "../images/phoneW.png"
        } else{
            darkButton.src = "../images/moon.png"
            homeICon.src = "../images/homeB.png"
            emailIcon.src = "../images/emailB.png"
            phoneIcon.src = "../images/phoneB.png"
        }
    }

    /* Gsap for mobile */;
    var menuBtn = document.querySelector('.menu_btn')
    var menuClose = document.querySelector('.close')

    var menuAnim = gsap.to('.menu_phone', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 2,
        paused: true,
    })

    menuBtn.onclick("click", () => {
        menuAnim.play();
    })

    menuClose.onclick("click", () => {
        menuAnim.reverse();
    })

   });