require('dotenv').config();

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const root = './src/'
const ForecastRouter = require(root +'routes/locations')

const app = express()

// middleware
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'))
app.use(express.json())
app.use('/locations', ForecastRouter)
// app.use(cors())
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


// console.log('\n\n\n', process.env.DB_URL, '\n\n\n')
// db connect
mongoose.connect('mongodb://localhost:27017/locations', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('DB Server Connected'))
	.catch(e => console.log('DB Error \n\n', e))


// run server
app.listen(54682, () => {
	console.log('Server Started on Port 54682')
})