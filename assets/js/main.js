const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.1) {
            entry.target.classList.add("in-view")
        }
        else {
            entry.target.classList.remove("in-view")
        }
    }) 
}, {
    threshold: [0.0, 0.1, 0.7]
})

sections.forEach(section => {
    observer.observe(section)
})


//Navigation 
const bodyTag = document.querySelector("body")
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

menuToggle.addEventListener("click", function () {
    bodyTag.classList.toggle("nav-open")
})