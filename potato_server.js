const express = require('express')
const app = express()
const port = 3000

//static file
app.use(express.static('public'))

//basic get routing
app.get('/', (req, res) => {
    res.send('Get Hello World')
})
app.get('/get', (req, res) => {
    res.send('Get sub route')
})

//basic post routing
app.post('/', (req, res) => {
    res.send('Post Hello World')
})

app.post('/post', (req, res) => {
    res.send('Post sub route')
})

//basic put routing request
app.put('/', (req, res) => {
    res.send('Put Hello World')
})

app.put('/put', (req, res) => {
    res.send('Put sub route')
})

//basic delete routing
app.delete('/', (req, res) => {
    res.send('Delete Hello World')
})

app.delete('/del', (req, res) => {
    res.send('Delete sub route')
})

app.listen(port, () => {
    console.log("potato developer server listening on port ${port")
})