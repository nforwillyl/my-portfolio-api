const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const cors = require('cors')

const db = async () => {
    try{
        const uri = 'mongodb+srv://nforwillylh:Y7fJHvor0wxEWxgD@cluster0.b4icybn.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(uri, {
            useNewUrlparser: true,
            useUnifiedTopology: true
        })

    }catch(err){
        console.log(err)
    }
}

db()
const app = express()

app.use(cors());
app.use(express.json());

app.get("/api",(req, res)=>{
    res.json()
})

app.use(require('./route/skillroute'))
app.use(require('./route/serviceroute'))

app.listen(PORT, () =>{console.log(`server started on port ${PORT}`)})   

mongoose.connection.once('open', ()  => {
    console.log('mongodb connected')
})

mongoose.connection.on('error', (err) => {
    console.log('error')
})