const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.getElementById("nav-links")

function eventHandler(e) {
    if (e.name == "menu-outline") {
        e.name = "close-outline"
        navLinks.classList.remove("hidden")
        navLinks.classList.add("flex")

        
    } else if (e.name == "close-outline") {
        e.name = "menu-outline"
        navLinks.classList.add("hidden")

    }
}

