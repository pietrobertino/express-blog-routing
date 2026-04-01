const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})