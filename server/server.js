const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()

const port = 3000
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


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})