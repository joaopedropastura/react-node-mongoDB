const bodyParser = require('body-parser')
const sports = require('./sports')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        sports
    )
}