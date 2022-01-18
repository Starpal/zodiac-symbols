import sky1 from '../static/images/sky1.jpeg';
import sky2 from '../static/images/sky2.jpeg';
import sky3 from '../static/images/sky3.jpeg';
import sky4 from '../static/images/sky4.jpeg';
import sky5 from '../static/images/sky5.jpeg';
import sky6 from '../static/images/sky6.jpeg';
import sky7 from '../static/images/sky7.jpeg';
import sky8 from '../static/images/sky8.jpeg';
import sky9 from '../static/images/sky9.jpeg';
import sky10 from '../static/images/sky10.jpeg';
import sky11 from '../static/images/sky11.jpeg';
import sky13 from '../static/images/sky13.jpeg';
import sky14 from '../static/images/sky14.jpeg';
import sky15 from '../static/images/sky15.jpeg';
import sky16 from '../static/images/sky16.jpeg';
import sky17 from '../static/images/sky17.jpeg';
import sky18 from '../static/images/sky18.jpeg';
import sky19 from '../static/images/sky19.jpeg';
import sky20 from '../static/images/sky20.jpeg';
import sky21 from '../static/images/sky21.jpeg';
import sky22 from '../static/images/sky22.jpeg';
import sky23 from '../static/images/sky23.jpeg';
import sky24 from '../static/images/sky24.jpeg';
import sky25 from '../static/images/sky25.jpeg';
import sky26 from '../static/images/sky26.jpeg';
import sky27 from '../static/images/sky27.jpeg';
import sky28 from '../static/images/sky28.jpeg';
import sky30 from '../static/images/sky30.jpeg';
import sky31 from '../static/images/sky31.jpeg';
import sky32 from '../static/images/sky32.jpeg';
import sky33 from '../static/images/sky33.jpeg';
import sky34 from '../static/images/sky34.jpeg';
import sky36 from '../static/images/sky36.jpeg';
import sky37 from '../static/images/sky37.jpeg';
import sky38 from '../static/images/sky38.jpeg';
import sky40 from '../static/images/sky40.jpeg';
import sky41 from '../static/images/sky41.jpg';
import sky42 from '../static/images/sky42.jpeg';
import sky43 from '../static/images/sky43.jpeg';
import sky44 from '../static/images/sky44.jpeg';
import sky45 from '../static/images/sky45.jpeg';
import sky46 from '../static/images/sky46.jpg';
import sky47 from '../static/images/sky47.jpeg';
import sky48 from '../static/images/sky48.jpeg';
import sky50 from '../static/images/sky50.jpeg';

const SKYES = [
	sky1,
	sky2,
	sky3,
	sky4,
	sky5,
	sky6,
	sky7,
	sky8,
	sky9,
	sky10,
	sky11,
	sky13,
	sky14,
	sky15,
	sky16,
	sky17,
	sky18,
	sky19,
	sky20,
	sky21,
	sky22,
	sky23,
	sky24,
	sky25,
	sky26,
	sky27,
	sky28,
	sky30,
	sky31,
	sky32,
	sky33,
	sky34,
	sky36,
	sky37,
	sky38,
	sky40,
	sky41,
	sky42,
	sky43,
	sky44,
	sky45,
	sky46,
	sky47,
	sky48,
	sky50,
];

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
		scale: 1.1
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

export { SKYES, SIGNS, PULSE, OPTIONS };