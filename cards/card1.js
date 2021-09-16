export default [
{
"html 1": `<h1>test header1</h1>`,
"html 2": `<h1>test header2</h1>`,
"sass": `.cardContainer {
  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-top: 75px;
  border-radius: 6.25px;
  min-height: 200px;
  max-height: 500px;
  width: 70vw;
  overflow-y: auto;
  // position: relative;
  display: flex;
  flex-direction: column;

  .header {
    // height: 50px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    // display: block;
    flex-shrink: 0;
    display: flex;
    color: grey;

    div {
      padding: 0 0 0 7.5px;
      height: 30px;
      width: 150px;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.15);
      transition: background-color .075s ease-in-out;
      transition: color .1s ease-out;
  
      i {
        margin-right: 7.5px;
      }
    }

    div:hover {
      color: white;
      background-color: cadetblue;
      cursor: pointer;
    }

    .selected {
      background-color: cornflowerblue;
    }
  }



  pre {
    color: white;
    padding: 10px;
  }

}`,
"javascript": `import { useEffect, useCallback, useRef } from "react"

import hljs from 'highlight.js';
import 'highlight.js/styles/Lioshi.css'; //Tomorrow Night Bright

const CodeCard = ({ data }) => {

  const cardRef = useRef()

  const generateCodeCard = useCallback(() => {
    // check if this card represents an image -- configure after
    if (data["image-sm"] || data["image-md"] || data["image-lg"]) {
      // -----
    } else {
      for (const [language, value] of Object.entries(data)) {
        // render button
        if (language === 'render') {
        // create code tab
        } else {
          if (value !== null) {
            const pre = document.createElement('div')
            pre.innerHTML = hljs.highlight(value, { language }).value
            cardRef.current.appendChild(pre)
          }
        }
      }
    }
  }, [])

  const render = useCallback(() => {

  }, [])

  useEffect(generateCodeCard, [])

  return <div ref={cardRef} className="card" />
}

export default CodeCard`,
"render 1": ["html 2", "css"]
},

{
"html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <script src="index.js"></script>
  </body>
</html>`,
"css": `* { 
  box-sizing: border-box;
}
html, body {
  min-height: 100%;
  background: #fff;
  color: #000;
}`,
"typescript": `@Get('/:id')
getMessage(@Param('id') id: string) {
  const messageId = id;
  // works just fine 👇
  const promise = this.messagesService.findOne(messageId).then((message) => {
    if (!message) {
      throw new NotFoundException('Message with ID not found');
    }
    else {
      return message;
    }
  });
  return promise;
}`,
"sql": `select studentID, FullName, sat_score
from student
where (studentID between 1 and 5 -- inclusive
or studentID = 8
or FullName like '%Maximo%')
and sat_score NOT in (1000, 1400)
order by FullName DESC;`,
"python": `def get_permutation(string, i=0):

if i == len(string):   	 
  print("".join(string))

for j in range(i, len(string)):

  words = [c for c in string]

  # swap
  words[i], words[j] = words[j], words[i]

  get_permutation(words, i + 1)

print(get_permutation('yup'))`,
"node": `const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`)
})`,
"c": `int main() {
  printf("Hello World\\n");
  return 0;
}`,
"php": `<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
    echo 'You are using Internet Explorer.<br />';
}
?>`,
"render": ["html 1", "css"]
}
]