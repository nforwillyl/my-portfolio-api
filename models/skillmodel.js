const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    default: 'Intermediate',
  },
})

const Skill = mongoose.model('Skill', skillSchema)
module.exports = Skill