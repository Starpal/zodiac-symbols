import * as Font from 'expo-font';

export default useFonts = async () =>
	await Font.loadAsync({
		Lato: require('../assets/fonts/Lato-Regular.ttf'),
		LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
		Charmonman: require('../assets/fonts/Charmonman-Regular.ttf'),
		Satisfy: require('../assets/fonts/Satisfy-Regular.ttf'),
		BirthstoneBregular: require('../assets/fonts/BirthstoneBounce-Regular.ttf'),
	});