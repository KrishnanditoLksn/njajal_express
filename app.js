const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const body = require('body-parser')


app.use(body.json())

//routes utamanya disini yaitu GET
app.get('/root', (req, res) => {
    if (port === 3000) {
        res.sendFile(path.join(__dirname, './public/page.html'));
    } else {
        res.sendStatus(404)
    }
})

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/login', (req, res) => {
        console.log({url: req.query.username})
        res.send("Hi im in login method")
    }
)

//express runner
app.listen(port, () => {
    console.log(`This  app listening on port ${port}`)
})

//res mengirim permintaan ke luar , req mendapatkan permintaan dari luar

app.put('/username', (req, res) => {
    console.log({requestFromOutside: req.body})
    res.send("Success Updated")
})