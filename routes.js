const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM ', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO books set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book added!')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book excluded!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book updated!')
        })
    })
})

//ROLES
routes.get('/roles', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Roles', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/rol', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Roles SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('role added succesfully!')
        })
    })
})

routes.put('/rol/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Roles set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('role updated succesfully!')
        })
    })
})

routes.delete('/rol/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Roles WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Role has been deleted succesfully')
        })
    })
})


// USERS
routes.get('/users', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Usuario', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/user', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO usuario SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('user added succesfully!')
        })
    })
})

routes.put('/users/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Usuario set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('user updated succesfully!')
        })
    })
})


module.exports = routes