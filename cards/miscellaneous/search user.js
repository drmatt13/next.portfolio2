export default [
{
'html': `<input type="text" placeholder="search here">`,
'css': `
body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px;
  height: 40px;
  padding-left: 5px;
  width: 80vw;
  max-width: 300px;
}

div {
  height: 30px;
  width: 80vw;
  max-width: 300px;
  padding-left: 10px;
  margin-bottom: 6px;
  border-radius: 7.5px;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
}

div:hover {
  cursor: pointer;
  background-color: darkgray;
}
`,
'javascript': `
const input = document.querySelector('[type=text]');
let users, divList = [];

const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await data.json();
  users.forEach((user, i) => {
    const div = document.createElement("div");
    div.innerHTML = user.name;
    document.body.appendChild(div);
    divList.push(div);
  });
}
getUsers();

input.addEventListener("keyup", e => {
  for (let s of divList) s.innerText.toLowerCase().includes(e.target.value.toLowerCase()) ? 
    s.style.display = "" : 
    s.style.display = "none"
})
`,
'render': ["html", "css", "javascript"]
}
]