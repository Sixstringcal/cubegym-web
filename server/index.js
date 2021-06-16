const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

app.use(cors());

var oblRouter = require('./routes/obl');

// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/test', (req, res) => {
    res.send('Welcome to the backend!')
})

app.use('/OBL', oblRouter);
//Set the port that you want the server to run on
const port = process.env.PORT || 625;
app.listen(port);
console.log('App is listening on port ' + port);