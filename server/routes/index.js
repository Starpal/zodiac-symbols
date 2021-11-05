var express = require('express');
var router = express.Router();
const ZodiacSymbol = require('../models/zodiacSymbol');

/* GET random degree. */
router.get('/', (req, res, next) => {
	res.status(200).send('zodiac-symbols');
});

router.get('/degree', (req, res, next) => {
	ZodiacSymbol.aggregate([{$sample: {size: 1}}])
		.then((response) => {
			//console.log("dataRandom", response)
			res.json(response);
		})
		.catch((error) => {
			console.log('Error while getting the degree from the DB: ', error.message);
			throw error;
		});
});

/* GET degree from DB. */

router.post('/DBdegree', (req, res, next) => {
	const {sign, degree} = req.body;
	ZodiacSymbol.find({sign, degree})
		.then((response) => {
			//console.log("DBdata", response)
			res.json(response[0]);
		})
		.catch((error) => {
			console.log('Error while getting the degree from the DB: ', error.message);
			throw error;
		});
});

module.exports = router;