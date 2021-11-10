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
		borderColor: 'rgba(250,251,254, 0.45)',
		borderWidth: 1.3,
		alignItems: "center",
		borderRadius: 30,
		padding: 11,
		backgroundColor: 'rgba(0, 0, 0, 0.47)'
	},
	buttonText_search: {
		color: 'rgba(250,251,254, 0.8)',
		textAlign: 'center',
		textShadowColor: 'black',
		textShadowOffset: { width: 5, height: 1 },
		fontSize: 26,
		opacity: 0.85,
		...Platform.select({
			ios: {
				textShadowRadius: 5,
				fontFamily: 'HelveticaNeue-Thin'
			},
			android: {
				textShadowRadius: 15
			}
		})
	},
	buttonText_inspired: {
		textShadowColor: '#EF6145',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 15,
		color: 'rgba(250,251,254, 0.8)',
		textAlign: 'center',
		fontSize: 28,
		opacity: 0.85,
		...Platform.select({
			ios: {
				fontFamily: 'HelveticaNeue-ThinItalic',
			}
		})
	}
})
export default styles;