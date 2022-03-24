const express = require('express');
const routes = express.Router();

// Routes
app.get('/', (req, res) => {
    res.send('app is running')
});

app.get('/api', (req, res)=> {
    res.send('test');
});





module.exports = routes;