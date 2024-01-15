const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


app.get('/user/:email',(req,res)=>{
    res.send('this is email route')
})
app.get('/user/:id',(req,res)=>{
    res.send('this is id route')
})

app.get('/',(req,res)=>{
    res.send('server is running...')
})

app.listen(port,(req,res)=>{
    console.log(`server is running on the port of ${port}`)
})