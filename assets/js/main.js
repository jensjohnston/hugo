const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0.1) {
            entry.target.classList.add("in-view")
        }
        //  else {
        //     entry.target.classList.remove("in-view")
        // }
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


menuToggle.addEventListener("click", function () {
  event.preventDefault();
    bodyTag.classList.toggle("nav-open")

    if (bodyTag.classList.contains("nav-open")) {
        gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8})
        gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
        gsap.to(".burger-middle", { width: 0 })
    } else {
        gsap.to(".burger-top", { rotation: 0, y: 0})
        gsap.to(".burger-bottom", { rotation: 0, y: 0 })
        gsap.to(".burger-middle", { width: 0 })
    }

})



const tags = document.querySelectorAll(".fade-in")

tags.forEach(tag => tag.style.opacity = 0)

const fadeIn = function () {
  let delay = 0.25
  
	tags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
    fadeIn()
  })


 