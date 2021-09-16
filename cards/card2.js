export default [
{
'html': `<head>
<!-- Font Awesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
</head>
<body>
<i class="fas fa-video"></i>
<i class="fas fa-camera"></i>
<i class="fas fa-layer-group"></i>
<i class="far fa-newspaper"></i>
<i class="far fa-file"></i>
<i class="far fa-clone"></i>
<i class="fas fa-home"></i>
<i class="far fa-compass"></i>
<i class="fas fa-tv"></i>
<i class="far fa-image"></i>
<i class="fas fa-map-marked-alt"></i>
<i class="fas fa-shopping-cart"></i>
<i class="fas fa-shopping-bag"></i>
<i class="far fa-heart"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-plus"></i>
<i class="fas fa-dollar-sign"></i>
<i class="fas fa-fire-alt"></i>
<i class="fas fa-bell-slash"></i>
<i class="fas fa-chevron-circle-down"></i>
<i class="fas fa-ellipsis-h"></i>
<i class="fas fa-percentage"></i>
<i class="far fa-comment-dots"></i>
<i class="far fa-comment"></i>
<i class="far fa-comments"></i>
<i class="far fa-comment-alt"></i>
<br/>
<i class="fab fa-amazon"></i>
<i class="fab fa-apple"></i>
<i class="fab fa-facebook"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-snapchat-ghost"></i>
<i class="fab fa-linkedin"></i>
<i class="fab fa-google"></i>
<i class="fab fa-cc-visa"></i>
<i class="fab fa-cc-paypal"></i>
<i class="fab fa-cc-apple-pay"></i>
<i class="fab fa-cc-amex"></i>
<i class="fab fa-cc-amazon-pay"></i>
<i class="fab fa-bitcoin"></i>
</body>`,
'render': ['html']
},

{
'html': `<button id="start-btn">start</button>
<button id="end-btn">end</button>
<div id="container"></div>`,

'css': `* {
  padding: 0; 
  margin: 0; 
  box-sizing: border-box; 
}

body {
  min-height: 100vh; 
  width: 100%; 
}

#start-btn { 
  position: absolute; 
  padding: 10px; top: 20px; 
  left: 20px
}

#end-btn { 
  position: absolute; 
  padding: 10px; top: 20px; 
  left: 100px
}

#container div {
  height: 50px;
  width: 10px;
  background-color: orange;
  float: left;
}`,

'javascript': `let animation;

const addDiv = () => {
  const div = document.createElement("div");
  document.getElementById("container").appendChild(div);
  animation = requestAnimationFrame(addDiv);
}

document.getElementById("start-btn").addEventListener("click", () => {
  animation = requestAnimationFrame(addDiv);
});

document.getElementById("end-btn").addEventListener("click", () => {
  cancelAnimationFrame(animation);
});`,

'render': ['html', 'css', 'javascript']
}
]