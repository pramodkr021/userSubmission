const express = require('express');
const app = express()
const port = 3000;
const swaggerDoc = require('swagger-ui-express')


const connectDB = require('./database/db')
const swaggerDocumentation = require('./helper/documentation')
const route = require('./routes/index.js')


app.use(express.json())
app.use('/documentations', swaggerDoc.serve)
app.use('/documentations', swaggerDoc.setup(swaggerDocumentation))
app.use(route)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is up and running at port ${port}`)
    })
})
