export default [
{
"html": `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body></body>
</html>`,
"css": `
  svg {
    background-color: white;
    border: 1px solid #bbb
  }
`,
"javascript d3": `
const svg = d3.select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 300)

const lolli = svg.append('g').attr('transform', 'translate(100, 100)')

lolli.append('line')
  .attr('x2', 200)
  .style('stroke', 'black')

lolli.append('circle')
  .attr('cx', 200)
  .attr('r', 3)

lolli.append('text')
  .attr('y', -10)
  .text('lolli')
`,
"render": ["html", "css", "javascript d3"]
}
]