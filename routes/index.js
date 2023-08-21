const bodyParser = require('body-parser')
const sports = require('./sports')
const auth = require('./auth')


module.exports = (app) => {
    app.use(
        bodyParser.json(),
        sports,
        auth
    )
}