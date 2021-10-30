export default [
{
'html': `
<input name="file" type="file" accept=".csv">
<div class="container"></div>
`,
'css': `
.container {
  margin-top: 10px;
  height: 400px;
  width: 500px;
  background-color: white;
  overflow-y: auto;
}
`,
'javascript': `
const input = document.querySelector('input[name="file"]')
const container = document.querySelector('.container')

input.onchange = () => {

  // file name
  console.log(input.files[0])

  const reader = new FileReader()
  reader.onload = () => {
    container.innerText = reader.result
  }
  // reader.readAsDataURL(input.files[0]);
  reader.readAsText(input.files[0]);
}
`,
'render': ["html", "css", "javascript"]
}
]