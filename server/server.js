
const express = require('express')
const app = express()
const port = 5000

const data = require('./data.json')

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
