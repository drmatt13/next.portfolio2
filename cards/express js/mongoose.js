export default [
  
{

"javascript connectDB": `
const mongoose = require('mongoose')

// <username> && <password> must be defined beforehand
// <dbname> will be created if does not exist
const URL = 'mongodb+srv://<username>:<password>@cluster0.ejwwm.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectDB = async () => {
  const conn = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  console.log(\`MongoDB Connected: \${conn.connection.host}\`)
}

module.exports = connectDB
`,

"node server": `
const express = require("express")
const app = express()

// initialize mongoose connection
const connectDB = require('./config/connectDB')
connectDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(\`server running on port \${PORT}\`)
})
`,

"javascript User": `
const mongoose = require('mongoose')

// create mongoose schema object
const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name'],
    trim: true,
    maxlength: [25, 'First name can not be more then 20 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
    trim: true,
    maxlength: [25, 'Last name can not be more then 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    maxlength: [50, 'Email can not be more then 20 characters']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    unique: false,
    trim: true,
    maxlength: [255, 'Password can not be more then 255 characters'],
    select: false
  },
  profileAvatar: {
    type: Number,
    default: 0
  },
  profileImage: {
    type: String,
    default: null
  },
  admin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// mongoose middleware
const slugify = require('slugify')
Schema.pre('save', function(next) {
  this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1).toLowerCase()
  this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1).toLowerCase()
  next()
})

// The collection name for this DB is defined in the export
module.exports = mongoose.model('User', Schema)
`,

"javascript controller": `
const User = require('../models/User')

// @desc      query users
// @route     GET /api/v1/users
// @access    Private
exports.post = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json({
      success: true,
      data: users
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc      get user by id
// @route     GET /api/v1/users/:id
// @access    Private
exports.post = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    return res.status(200).json({
      success: true,
      data: user
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc      create user
// @route     Post /api/v1/users
// @access    Private
exports.post = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    return res.status(201).json({
      success: true,
      data: user
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)
      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}
`

},

]