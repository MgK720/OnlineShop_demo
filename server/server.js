const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const client = require('./databaseConnection');
const port = 3000

const queryTest = async () => {
    try{
        const results = await client.query('SELECT * FROM order_status');
        console.log(results.rows)
    }catch (err) {
        console.log(err);
    }
}

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true})); 

app.get("/getmsg", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

queryTest();

   

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})