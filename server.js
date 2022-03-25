const express = require('express');
const mysql = require('mysql');
const routes = require('./routes');


// Server startup
// const app = express();
const PORT = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b4735e6b2f2213',
    password: 'fc00f36d',
    database: 'heroku_9389f936ccfb0a4'
});

// Middlewares
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
  })

app.use(express.json())



// routes
app.get('/', (req, res)=>{
    res.send('Welcome to my Medical app API')
})
app.use('/api', routes)

// server running 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
