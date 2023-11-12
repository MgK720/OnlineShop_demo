const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const itemsRoutes = require('./src/routes/items')
const categoriesRoutes = require('./src/routes/categories')
const authRoutes = require('./src/routes/auth')

const passport = require('passport');

const port = 3000

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true})); 
app.use(passport.initialize());

app.use("/items", itemsRoutes);
app.use("/categories", categoriesRoutes)
// TODO - gdy zalogowany to nie ma możliwośći wejścia pod te routy
app.use('/auth', authRoutes)

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
