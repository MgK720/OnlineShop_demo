const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const itemsRoutes = require('./src/routes/items')
const categoriesRoutes = require('./src/routes/categories')
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

app.use("/items", itemsRoutes);
app.use("/categories", categoriesRoutes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


// const client = require('./databaseConnection');
// app.get("/conTest", async (req,res) => {
//     try{
//         const results = await client.query('SELECT * FROM order_status');
//         res.json(results.rows)
//     }catch (err) {
//         console.log(err);
//     }
// })