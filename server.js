const express = require('express');
const app = express()
const port = 3000;


const connectDB = require('./database/db')
const route = require('./routes/index.js')


app.use(express.json())
app.use(route)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is up and running at port ${port}`)
    })
})
