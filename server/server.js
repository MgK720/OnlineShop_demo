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

app.use((req, res, next) => {
  console.log(req.isAuth);
  next();
})

app.use("/items", itemsRoutes);
app.use("/categories", categoriesRoutes)
app.use('/auth', authRoutes)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


