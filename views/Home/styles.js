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
		marginTop: '11%',
		borderColor: 'rgba(250, 250, 250, 0.37)',
		borderWidth: 1.3,
		alignItems: "center",
		borderRadius: 30,
		padding: 11,
		backgroundColor: 'rgba(0, 0, 10, 0.45)',
		elevation: 4
	},
	buttonText_degrees: {
		color: 'rgba(250, 251, 254, 0.8)',
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 0.9)',
		textShadowOffset: { width: 3, height: -1 },
		textShadowRadius: 15,
		opacity: 0.85,
		...Platform.select({
			ios: {
				textShadowRadius: 5,
				fontSize: 29,
				fontFamily: 'HelveticaNeue-Thin'
			},
			android: {
				fontFamily: "Lato",
				fontSize: 27,
				textShadowRadius: 15
			}
		})
	},
	buttonText_inspired: {
		textShadowColor: '#F1553C',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 15,
		color: 'rgba(250, 251, 254, 0.8)',
		textAlign: 'center',
		opacity: 0.85,
		...Platform.select({
			ios: {
				fontSize: 30,
				fontFamily: 'HelveticaNeue-ThinItalic'
			},
			android: {
				fontSize: 29,
				fontFamily: "LatoItalic"
			}
		})
	}
})
export default styles;