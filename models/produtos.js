const mongoose = require('mongoose')


const prods =  mongoose.model('Produtos esportivos', {
    marca:      String,
    categoria:  String,
    nome:       String,
    preco:      Number
})

module.exports = prods