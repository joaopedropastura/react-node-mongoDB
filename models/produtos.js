const mongoose = require('mongoose')


const prods =  mongoose.model('Produtos_esportivos', {
    marca:      String,
    categoria:  String,
    nome:       String,
    preco:      Number
})

module.exports = prods