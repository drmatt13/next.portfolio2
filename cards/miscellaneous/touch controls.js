export default [
  
{

"html": `
<div class="slider-container">
  <div class="slide">
    <h2>Airpods</h2>
    <h4>$199</h4>
    <img src="/images/notes/miscellaneous/airpods.png" alt="airpods">
    <a href="#" class="btn">Buy Now</a>
  </div>
  <div class="slide">
    <h2>iPhone 12</h2>
    <h4>$799</h4>
    <img src="/images/notes/miscellaneous/iphone.png" alt="iphone">
    <a href="#" class="btn">Buy Now</a>
  </div>
  <div class="slide">
    <h2>iPad</h2>
    <h4>$599</h4>
    <img src="/images/notes/miscellaneous/ipad.png" alt="ipad">
    <a href="#" class="btn">Buy Now</a>
  </div>
</div>
`,

"css": `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, 
body {
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  color: white;
}

.slider-container {
  height: 100vh;
  display: inline-flex;
  overflow: hidden;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
  cursor: grab;
}

.slide {
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  user-select: none;
}

.slide img {
  max-width: 100%;
  max-height: 60%;
  transition: transform 0.3s ease-in-out;
  margin: 1rem;
}

.slide h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.slide h4 {
  font-size: 1.3rem;
}

.btn {
  background-color: #444;
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
}

.grabbing {
  cursor: grabbing !important;
}

.grabbing .slide img {
  transform: scale(0.9);
}
`,

"javascript": `
const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  // mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  slide.addEventListener('mouseleave', touchEnd)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  slider.style.transform = \`translateX(\${currentTranslate}px)\`
}
`,

"render": ["html", "css", "javascript"]

}

]