const mongoose = require('mongoose')

const forecastSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	temperature: {
		type: Number,
		required: true
	},
	lastUpdated: {
		type: Number,
		required: true
	},
	
})

module.exports = mongoose.model('Forecast', forecastSchema)