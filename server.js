//modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;
const axios = require('axios');
const CircularJSON = require('circular-json');
// middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//get request implementing 3rd party api call
app.get('/poop', (req, res, next) => {
    const url = 'https://ghibliapi.herokuapp.com/films';
    axios.get(url).then((response) => {
        const str = CircularJSON.stringify(response);
        console.log(response, 'backend');
        res.send(JSON.parse(str));
    })
})

//start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`);
})

