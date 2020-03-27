//modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;
// middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`);
})

