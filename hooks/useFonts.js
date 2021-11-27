import * as Font from 'expo-font';

export default useFonts = async () =>
	await Font.loadAsync({
		Lato: require('../assets/fonts/Lato-Regular.ttf'),
		LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
		LatoBoldItalic: require('../assets/fonts/Lato-BoldItalic.ttf'),
		Charmonman: require('../assets/fonts/Charmonman-Regular.ttf'),
		Satisfy: require('../assets/fonts/Satisfy-Regular.ttf'),
		Carattere: require('../assets/fonts/Carattere-Regular.ttf'),
		Allura: require('../assets/fonts/Allura-Regular.ttf'),
		BirthstoneBmedium: require('../assets/fonts/BirthstoneBounce-Medium.ttf'),
		BirthstoneBregular: require('../assets/fonts/BirthstoneBounce-Regular.ttf'),
		MarckScript: require('../assets/fonts/MarckScript-Regular.ttf')
	});