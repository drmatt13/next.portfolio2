export default [
{
'html': `
<div class="container">
  <div id="overflow"></div>
</div>
<div class="container">
  <div>x: <span id="x">0</span></div>
  <div>y: <span id="y">0</span></div>
</div>
`,
'css': `
body {
  display: flex;
}

.container:first-of-type {
  overflow: auto;
  height: 200px;
  width: 200px;
}

#overflow {
  background: rgb(255,186,75);
  background: radial-gradient(circle, rgba(255,186,75,1) 0%, rgba(51,43,51,1) 80%, rgba(116,149,126,1) 100%);
  height: 1000px;
  width: 1000px;
}

.container:nth-child(2) {
  background-color: #fff8;
  align-self: flex-start;
  font-size: xx-large;
  border-radius: 18px;
  margin-left: 10px;
  min-width: 120px;
  padding: 10px;
}`,
'javascript': `
const x = document.getElementById("x")
const y = document.getElementById("y")
const container = document.querySelector(".container")

container.addEventListener('scroll', () => {
  x.innerHTML = container.scrollLeft
  y.innerHTML = container.scrollTop
})
`,
'render': ["html", "css", "javascript"]
}
]