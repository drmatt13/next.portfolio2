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
},

{
'html': `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <!-- font awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

  <!-- hidden form -->
  <form enctype="multipart/form-data">
    <input name="image" type="file" accept="image/png, image/jpeg" required />
    <input type="submit" />
  </form>
  <!-- hidden form -->

  <div class="upload-container">
    Choose a file or drag it here.
  </div>

  <div class="image-container empty">
    <i class="far fa-images"></i>
    <img>
  </div>

  <div class="submit-btn">Submit</div>

</body>
</html>
`,
'css': `
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root {
  --offset: 7.5px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

form {
  display: none;
}

.upload-container {
  margin: var(--offset);
  height: 200px; 
  width: 350px;
  position: relative;
  background-color: #fff;
  border: 2px dashed gray;
  border-radius: 1.5rem;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all .1s ease-out;
  user-select: none;
}

.upload-container:hover {
  color: black;
  cursor: pointer;
  font-size: 1.05em;
  background-color: whitesmoke;
  border-color: cornflowerblue;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.upload-container::before {
  content: "";
  z-index: -1;
  position: absolute;
  height: calc(200px + var(--offset) * 2);
  width: calc(350px + var(--offset) * 2);
  background-color: #fff8;
  border-radius: inherit;
}

.image-container {
  margin-top: 1rem;
  min-height: 150px;
  max-height: 500px; 
  min-width: 150px;
  max-width: 350px;
  background-color: #fff8;
  border-radius: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
  transition: all .1s ease-out;
}

.image-container > i {
  display: none;
}

.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  user-select: none;
}

.empty > i {
  display: initial;
  font-size: 2.75em;
  color: rgb(150, 75, 75);
}

.image-container > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

.empty > img {
  display: none;
}

.submit-btn {
  margin-top: 1em;
  background-color: rgb(65, 140, 255);
  padding: 1em 4em;
  border-radius: 2em;
  cursor: pointer;
  transition: all .1s ease-out;
  user-select: none;
}

.submit-btn:hover {
  background-color: rgb(80, 150, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`,
'javascript': `
// hidden form
const formInput = document.querySelector('input[name="image"]')
const formSubmit = document.querySelector('input[name="submit"]')

const uploadContainer = document.querySelector('.upload-container')

const imageContainer = document.querySelector('.image-container')
const image = document.querySelector('img')

const submitBtn = document.querySelector('.submit-btn')

// update preview image
formInput.onchange = () => {
  imageContainer.classList.remove('empty')
  image.setAttribute('src', URL.createObjectURL(formInput.files[0]))
}

// click upload container triggers formInput click
uploadContainer.addEventListener('click', () => {
  formInput.click()
})

const preventDefault = e => {
  e.preventDefault()
  e.stopPropagation()
}

uploadContainer.addEventListener('dragenter', preventDefault, false)
uploadContainer.addEventListener('dragleave', preventDefault, false)
uploadContainer.addEventListener('dragover', preventDefault, false)
uploadContainer.addEventListener('drop', preventDefault, false)

// allow drag image to upload
uploadContainer.addEventListener('drop', e => {
  e.preventDefault()
  const data = e.dataTransfer.files
  if (data[0].type === 'image/png' || 'image/jpeg') {
    imageContainer.classList.remove('empty')
    image.setAttribute('src', URL.createObjectURL(data[0]))
  }
})
`,
'render': ["html", "css", "javascript"]
}
]