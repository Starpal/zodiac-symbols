import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    Lato: require('../assets/fonts/Lato-Regular.ttf'),
    LatoItalic: require('../assets/fonts/Lato-Italic.ttf'),
    LatoBoldItalic: require('../assets/fonts/Lato-BoldItalic.ttf'),
    Charmonman: require('../assets/fonts/Charmonman-Regular.ttf')
  });