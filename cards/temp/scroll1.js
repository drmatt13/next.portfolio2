export default [
{
'html': `
<div class="container">
  <div id="overflow"></div>
</div>
<div class="container">
  <div>
    <div>x: <span id="x1">0</span></div>
    <div>y: <span id="y1">0</span></div>
  </div>
  <div>
    <div>x: <span id="x2">0</span>%</div>
    <div>y: <span id="y2">0</span>%</div>
  </div>
</div>
`,
'css': `
body {
  display: flex;
}

.container:first-of-type {
  overflow: auto;
  height: 200px;
  width: 300px;
}

#overflow {
  background: rgb(255,186,75);
  background: radial-gradient(circle, rgba(255,186,75,1) 0%, rgba(51,43,51,1) 80%, rgba(116,149,126,1) 100%);
  height: 900px;
  width: 1200px;
}

.container:nth-child(2) {
  margin-left: 10px;
}

.container:nth-child(2) > div:first-of-type, 
.container:nth-child(2) > div:last-of-type {
  background-color: #fff8;
  align-self: flex-start;
  font-size: xx-large;
  margin-bottom: 10px;
  border-radius: 18px;
  min-width: 120px;
  padding: 10px;
}
`,
'javascript': `
// pixels
const x1 = document.getElementById("x1")
const y1 = document.getElementById("y1")
// percentage
const x2 = document.getElementById("x2")
const y2 = document.getElementById("y2")
// containers
const container = document.querySelector(".container")
const overflow = document.getElementById("overflow")

// change in size between parent and child containers
const dx = overflow.clientWidth - container.clientWidth
const dy = overflow.clientHeight - container.clientHeight

const percentage = (partialValue, totalValue) => (100 * partialValue) / totalValue

container.addEventListener('scroll', () => {
  x1.innerHTML = container.scrollLeft.toFixed(0)
  y1.innerHTML = container.scrollTop.toFixed(0)
  x2.innerHTML = percentage(container.scrollLeft, dx).toFixed(0)
  y2.innerHTML = percentage(container.scrollTop, dy).toFixed(0)
})
`,
'render': ["html", "css", "javascript"]
}
]