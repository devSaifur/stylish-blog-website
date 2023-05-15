const menuOpenBtn = document.getElementById("menu-open")
const menuCloseBtn = document.getElementById("menu-close")
const navLinks = document.getElementById("nav-links")
const mobileNav = document.getElementById("mobile-nav")

function eventHandler(btn, add, remove) {
    btn.addEventListener("click", () => {
        add.classList.add("hidden")
        remove.classList.remove("hidden")
    })
}

eventHandler(menuOpenBtn, menuOpenBtn, menuCloseBtn)
eventHandler(menuCloseBtn, menuCloseBtn, menuOpenBtn)

function navEvent(btn, remove, add) {
    btn.addEventListener("click", () => {
        navLinks.classList.remove(remove)
        navLinks.classList.add(add)
    })
}

navEvent(menuOpenBtn,"hidden", "fixed")
navEvent(menuCloseBtn, "fixed", "hidden")