const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    details: {
        type: String,
        default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus itaque, veniam ex nobis incidunt tempore asperiores, sequi consectetur, eius quis tempora sit totam porro voluptate laborum quo. Dicta blanditiis tenetur totam?"
    },
})

const Service = mongoose.model('Service', serviceSchema)
module.exports = Service