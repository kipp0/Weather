const express = require('express')
const Forecasts = require('../models/forecasts')

const router = express.Router()


//get first 5 forecasts and returns it as response
router.get('/', async (req, res) => {
	// I wonder if the _id will be available for use when returning objects
	try {
		const forecasts = await Forecasts.find().sort({_id:-1}).limit(5)
		res.json(forecasts)

	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.post('/', async (req, res) => {

	const forecast = new Forecasts({
		name: req.body.name,
		temperature: req.body.temperature,
		lastUpdated: req.body.lastUpdated
	})
	
	try {
		const newForecast = await forecast.save()
		res.status(201).json(newForecast)
		
	} catch (error) {
		res.status(400).json({ message: error.message })
	}


})

router.delete('/', async (req, res) => {
	try {
		const res = await Forecasts.deleteOne({ lastUpdated: req.body.lastUpdated });
		console.log(res)
		// res.status(201).json({deletedCount: res.deletedCount})

	} catch (error) {
		res.status(400).json({ message: error.message })
	}
})



module.exports = router