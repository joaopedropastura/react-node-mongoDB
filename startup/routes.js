const express = require('express')
const prodEsportivos = require('../routes/sports')
const auth = require('../routes/auth')

module.exports = (app) => {
    app.use(express.json())
    app.use('/db/produtos-esportivos', prodEsportivos)
    app.use('/db/auth', auth)
}