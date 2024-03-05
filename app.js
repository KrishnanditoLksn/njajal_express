const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const body = require('body-parser')
const connection = require('./public/src/config/database.js')

app.use(body.json())
app.set("view engine", "ejs")

//routes utamanya disini yaitu GET
app.get('/login', (req, res) => {
    if (port === 3000) {
        res.sendFile(path.join(__dirname, './public/page.html'));
    } else {
        res.sendStatus(404)
    }
})

//connect to database
app.get('/read', (req, res) => {
    connection.query("SELECT * FROM MAHASISWA", (err, result) => {
        if (err) {
            throw err
        } else {
            console.log(result)
            res.send(result)
        }
    })
})


app.get('/views', (req, res) => {
        // console.log({url: req.query.username})
        res.send("Hi im in login method")
    }
)

app.get('/', (req, res) => {
    res.render("./public/src/views/index.ejs")
})

//post insert data
app.post('/mahasiswa', (req, res) => {
    res.send("Posting !!")
})


//express runner
app.listen(port, () => {
    console.log(`This  app listening on port ${port}`)
})

//res mengirim permintaan ke luar , req mendapatkan permintaan dari luar
//put update
app.put('/username', (req, res) => {
    console.log({requestFromOutside: req.body})
    res.send("Success Updated")
})