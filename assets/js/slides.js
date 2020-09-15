const slides = document.querySelector("section div.slides")

let current = 0
let z = 100000



const slideImages = slides.querySelectorAll("img")

slideImages.forEach(image => {
  z = z - 1
  image.style.zIndex = z    
})

const timeline = gsap.timeline()

timeline 
    .set(slideImages, {
        x: () => {
            return 500 * Math.random() - 250
        },
         y: "500%",
        rotation: () => {
            return 90 * Math.random() -45
        }
        })
    .to(slideImages, {x:0, y:0, stagger: -0.25})
    .to(slideImages, {
        rotation: () => {
            return 16 * Math.random() - 8
        }
    })


slides.addEventListener("click", function() {
  z = z - 1

  let direction = "150%"
  let midAngle = 15
    
    if (Math.random() > 0.5) {
      direction = "-150%"
      midAngle = -15
    }
  
  const currentImage = slideImages[current]
  const flipTimeline = gsap.timeline()
  
  flipTimeline
    .set(currentImage, { x:0 })
    .to(currentImage, { 
        x: direction,
        rotation: midAngle
    })
    .set(currentImage, { zIndex: z })
    .to(currentImage, { 
        x: 0,
        rotation: () => {
            return 16 * Math.random() - 8
        }
    })


  current = current + 1
  current = current % slideImages.length

})