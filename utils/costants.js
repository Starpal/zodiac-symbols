import { Dimensions } from 'react-native';

//get Window height
const height = Dimensions.get('window').height;

//COSTANTS
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

const IOS = { 
	platform: Platform.OS == "ios",
	tablet: height > 1300,
	iphone: height > 700
}

export { SIGNS, PULSE, OPTIONS, IOS };