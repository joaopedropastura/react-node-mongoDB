const mongoose = require('mongoose')


const user =  mongoose.model('Users', {
    name:       String,
    email:      String,
    password:   String
})

module.exports = user