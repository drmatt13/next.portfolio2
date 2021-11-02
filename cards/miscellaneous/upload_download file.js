export default [
{
'html': `
<input name="file" type="file" accept="*"> 
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
'javascript upload': `
const input = document.querySelector('input[name="file"]')
const container = document.querySelector('.container')

input.onchange = () => {

  // file name = input.files[0]

  const reader = new FileReader()

  // when file is loaded into memory (reader.onload)
  reader.onload = () => {
    container.innerText = reader.result
  }

  // methods to read file

  // readAsText
  reader.readAsText(input.files[0])
  
  // readAsDataURL
  // reader.readAsDataURL(input.files[0])

  // readAsArrayBuffer
  // reader.readAsArrayBuffer(input.files[0])
  
  // readAsBinaryString
  // reader.readAsBinaryString(input.files[0])
  
}
`,
'render': ["html", "css", "javascript upload"]
},

{
'html': `
<button>download csv</button> 
<pre>
abc, def, ghi, jkl, mno, pqr, stu, vwx, yz
123, 456, 789, 012, 345, 678, 901, 234, 567
</pre>
`,
'css': `
pre {
  margin-top: 10px;
  padding: 10px;
  height: 150px;
  width: 500px;
  border-radius: 5px;
  background-color: white;
}
`,
'javascript download': `
document.querySelector('button').addEventListener('click', () => {
  
  const pre = document.querySelector('pre'),
        csv = pre.innerText,
        blob = new Blob([csv], {type: 'text/csv'}), // takes string or arraybuffer
        url = URL.createObjectURL(blob),  // creates a blob url to use in a href attribute 
        a = document.createElement('a')

  a.href = url
  a.download = 'fileName.csv' // file name is optional 
  a.click()
})
`,
'render': ["html", "css", "javascript download"]
}
]