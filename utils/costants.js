const SIGNS = [
	'Sign',
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn',
	'Aquarius',
	'Pisces'
];

/*
** Loading text animation
*/
const PULSE = {
	0: {
		scale: 1,
	},
	0.5: {
		scale: 1.095
	},
	1: {
		scale: 1
	}
}
	
/*
** Hide Navigation Header onScroll
*/
const OPTIONS = {
	navigationOptions: {
		headerStyle: {
			height: 80,
			elevation: 0, // remove shadow on Android
			shadowOpacity: 0, // remove shadow on iOS
			borderBottomWidth: 0 // Just in case.
		}
	}
}

export { SIGNS, PULSE, OPTIONS };