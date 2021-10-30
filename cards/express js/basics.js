export default [
{

"node server": `
const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config({ path: './config/config.env' })

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const router = require("./routes/router")
app.use("/route", router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(\`server running on port \${PORT}\`)
})
`,

"javascript router": `
const express = require("express");
const router = express.Router();

// controllers
const { post, ... } = require('../controllers/controller')

router
  .route('/')
  .get((req, res) => {
    const query = req.query // { "name": "foo", "age": "bar" }
    res.json({ success: true, query })
  })
  .post(post) // express controller

router
  .route('/:id')
  .get((req, res) => {
    res.json({ id: req.params.id })
  })

module.exports = router
`,

"javascript controller": `
// @desc      description
// @route     POST /route
// @access    Public
exports.post = (req, res, next) => {
  res.json({ success: true })
}

// @desc      description
// @route     PATCH /route/route
// @access    Private
exports.patch = (req, res, next) => {
  res.json({ success: true })
}
`

},

{

"node server": `
const express = require("express")
const app = express()

// create middleware function
const timeStamp => (req, res, next) {
  console.log('Time:', Date.now())
  next()
}

// global middleware
app.use(timeStamp)

// timeStamp() -> app.get()
app.get('/', (req, res) => {
  res.json({ success: true })
})

// route specific middleware
const auth = require('./middleware/auth')
app.post('/', auth, ..., (req, res) => {
  res.json({ success: true })
})

// error handling middleware
const errorHandler = require('./middleware/error')
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(\`server running on port \${PORT}\`)
})
`,

"javascript auth": `
const jwt = require('jwt')

const auth = (req, res, next) => {
  const { cookies } = req.cookies
  if (!jwt.verify(cookies.bearer, process.env.JWT_SECRET))
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  else next()
}

module.exports = auth
`,

"javascript errorHandler": `
const errorHandler = (err, req, res, next) => {
  console.log(err.stack)
  res
    .status(err.statusCode || 500)
    .json({
    success: false,
    error: err.message || 'Server Error'
  })
}

module.exports = errorHandler
`

},

{

"javascript register user": `
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../../models/User')

// @desc      register user
// @route     POST /register
// @access    Public
exports.post = async (req, res, next) => {
  try {
    // check if user already exists
    const user = await User.findOne({ req.body.email })
    if (user) return res.status(400).json({ success: false, message: 'User already exists' })
    // hash password and create user
    req.body.password = await bcrypt.hash(password, 10)
    const user = await User.create(req.body)
    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.cookie('bearer', token, { httpOnly: true })
    res.status(201).json({ success: true, user, token })
  } catch (err) {
    next(err)
  }
}
`,

"javascript login user": `
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../../models/User')

// @desc      login user
// @route     POST /login
// @access    Public
exports.login = async (req, res, next) => {
  try {
    // check if user exists
    const user = await User.findOne({ req.body.email })
    if (!user) return res.status(400).json({ success: false, message: 'User does not exist' })
    // check if password is correct
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) return res.status(400).json({ success: false, message: 'Incorrect password' })
    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.cookie('bearer', token, { httpOnly: true })
    res.status(200).json({ success: true, user, token })
  } catch (err) {
    next(err)
  }
}
`

},

{

"node req & res": `
// user supplied data
req.params
req.query
req.body

req = {
  _startTime       :  Date, 
  app              :  function(req,res){},
  body             :  {},
  client           :  Socket,
  complete         :  Boolean,
  connection       :  Socket,
  cookies          :  {},
  files            :  {},
  headers          :  {},
  httpVersion      :  String,
  httpVersionMajor :  Number,
  httpVersionMinor :  Number,
  method           :  String,  // e.g. GET POST PUT DELETE
  next             :  function next(err){},
  originalUrl      :  String,
  params           :  [],
  query            :  {},
  readable         :  Boolean,
  res              :  ServerResponse,
  route            :  Route,
  signedCookies    :  {},
  socket           :  Socket,
  url              :  String
}

res = {
  app              :  function(req, res) {},
  chunkedEncoding  :  Boolean,
  connection       :  Socket,
  finished         :  Boolean,
  output           :  [],
  outputEncodings  :  [],
  req              :  IncomingMessage,
  sendDate         :  Boolean,
  shouldkeepAlive  :  Boolean,
  socket           :  Socket,
  viewCallbacks    :  [],
  writable         :  Boolean
}
`,

"file status codes": `
1. Informational responses (100–199)
2. Successful responses (200–299)
3. Redirects (300–399)
4. Client errors (400–499)
5. Server errors (500–599)

Informational responses
100 Continue
101 Switching Protocol
102 Processing 
103 Early Hints

Successful responses
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
226 IM Used

Redirects
300 Multiple Choice
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
307 Temporary Redirect
308 Permanent Redirect

Client errors
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
425 Too Early
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
451 Unavailable For Legal Reasons

Server errors
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
`

}
]