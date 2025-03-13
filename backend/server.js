const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 3000;

const UserRoutes = require('./routes/user.route')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Mongoose Connect function
mongoose.connect(process.env.DB_CONNECT
).then(() => {
    console.log('Connected to Uber DB');
}).catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'))

app.use("/users", UserRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
