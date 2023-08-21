const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
// const config = require('./configEnv.mjs')

app.use(cors({
    origin: '*'
}))

require('./startup/db')()
require('./startup/routes')(app)

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = server;