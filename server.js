const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');


// Server startup
const app = express();
app.set('port', process.env.PORT || 5000);

const dbOptions = { // database credentials in clever cloud 
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'b4735e6b2f2213',
    password: 'fc00f36d',
    database: 'heroku_9389f936ccfb0a4'
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'))// other strategies are pool and request, for the last param
app.use(express.json())



// routes
app.get('/', (req, res)=>{
    res.send('Welcome to my Medical app API')
})
app.use('/api', routes)

// server running 
app.listen(5000, () => {
    console.log('Server running on port http://localhost:'+ app.get('port'));
})

