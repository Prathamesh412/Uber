const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const app = express()
const port = process.env.PORT || 3000;

const UserRoutes = require('./routes/user.route')
const CaptainRoutes = require('./routes/captain.route')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Mongoose Connect function
mongoose.connect(process.env.DB_CONNECT
).then(() => {
    console.log('Connected to Uber DB');
}).catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!'))

app.use("/users", UserRoutes)
app.use("/captains", CaptainRoutes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
