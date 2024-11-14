'use strict'

const express = require('express')
const path = require('path')

const PORT = 8000
const HOST = 'localhost'

const app = express()

// Memberikan akses ke folder 'public' untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})
