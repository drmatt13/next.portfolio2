export default [
{
'html': `
<form enctype="multipart/form-data">
  <input name="avatar" type="file" accept="image/png, image/jpeg" required />
  <input type="submit" value="Submit"/>
<form>

<div>
  <img alt="image preview">
</div>`,
'css': `
div {
  background-color: rgba(255, 255, 255, 0.5);
  margin-top: 25px;
  height: 250px; 
  width: 250px; 
  display: block; 
}

img { height: 100%; width: 100%; object-fit: contain; }
`,
'javascript': `
const input = document.querySelector('input[name="avatar"]');

// Update Preview Image
input.onchange = () => {
  document
    .querySelector("img")
    .setAttribute("src", URL.createObjectURL(input.files[0]));
}

document.querySelector('form').addEventListener("submit", (e) => {  
  e.preventDefault();

  const formData = new FormData();
  formData.append("avatar", input.files[0], "test");

  fetch('http://localhost:3500', {
    method: 'post',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

})
`,
'render': ["html", "css", "javascript"]
}
]