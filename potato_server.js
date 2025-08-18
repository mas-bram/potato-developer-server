const express = require('express')
const app = express()
const port = 3000

//static file
app.use(express.static('public'))

//use basic routes
app.use('/', require('./routes/basicRoutes'))

app.listen(port, () => {
    console.log("potato developer server listening on port ${port}")
})