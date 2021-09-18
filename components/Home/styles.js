//improt StyleSHeet to provide a css abstraction
///import Platform to provide styling for specific platforms android and ios.
import { StyleSheet, Platform } from 'react-native';

//Define your styles using a StyleSheet.create method.
const styles = StyleSheet.create({
	homeDiv: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		...Platform.select({
			ios: {
				top: 250
			},
			android: {
				top: 240
			}
		})
	},
	homePageImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	button: {
		marginTop: '9%',
		borderColor: '#0DFFFF3F',
		borderWidth: 1.5,
		alignItems: "center",
		borderRadius: 25,
		padding: 11
	},
	buttonText_search: {
		color: '#FAFBFE',
		textAlign: 'center',
		textShadowColor: 'black',
		textShadowOffset: { width: 7, height: 2 },
		opacity: 0.7,
		fontSize: 32,
		...Platform.select({
			ios: {
				textShadowRadius: 5,
				fontFamily: 'HelveticaNeue-Thin',
			},
			android: {
				textShadowRadius: 15,
				fontFamily: 'Lato-Light',
			}
		})
	},
	buttonText_inspired: {
		textShadowColor: 'black',
		textShadowOffset: { width: 5, height: 2 },
		textShadowRadius: 15,
		color: '#FAFBFE',
		textAlign: 'center',
		opacity: 0.7,
		fontSize: 35,
		...Platform.select({
			ios: {
				fontFamily: 'HelveticaNeue-ThinItalic',
			},
			android: {
				fontFamily: 'Lato-LightItalic',
				fontWeight: '400',
			}
		})
	}
})
export default styles;