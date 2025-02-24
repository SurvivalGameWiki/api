const express = require('express')
const app = express()
const port = 5000

app.get('/image', (req, res) => {
    console.log(req._parsedUrl.query)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})