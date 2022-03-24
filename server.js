const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

// Server startup
const app = express();
app.set('port', process.env.PORT || 5000);

const dbOptions = { // database credentials in clever cloud 
    host: 'bs2dwvzjsm81df5wdtar-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uazbdjixc7jrm9mg',
    password: 'Byo23jVEebdhwcBveKve',
    database: 'bs2dwvzjsm81df5wdtar'
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'))// other strategies are pool and request, for the last param

// server running 
app.listen(5000, () => {
    console.log('Server running on port http://localhost:'+ app.get('port'));
})

