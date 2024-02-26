const express = require('express')
const app = express()
const port = 3000
const path = require('path')

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
        res.send("Hi im in login method")
    }
)


//express runner
app.listen(port, () => {
    console.log(`This  app listening on port ${port}`)
})

app.post("/login", (req, res) => {
    res.send("Success Loginnnnnnn")
})