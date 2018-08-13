const express = require('express')
const app = express();
// http-server
var bodyParser = require('body-parser')
    //var path = require('path')
var cors = require('cors')

//setting configs
app.use(cors())

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//getting controllers files
var ltController = require('./controllers/lt')


//set controllers reponses
app.use('/lts', ltController)

app.listen(port, () => {
    console.log('server running on port 3000')
});