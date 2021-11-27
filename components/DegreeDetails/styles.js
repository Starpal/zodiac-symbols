import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	homePageImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		...Platform.select({
			ios: {
				opacity: 0.8
			},
			android: {
				opacity: 0.7
			}
		})
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10,
		fontSize: 60,
		textAlign: 'center'
	},
	sign: {
		fontWeight: 'bold',
		color: '#0D0D3E',
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: -10,
		...Platform.select({
			ios: {
				marginTop: 85,
				fontFamily: 'Optima-BoldItalic',
				fontSize: 55,
			},
			android: {
				marginTop: 35,
				fontFamily: 'sans-serif-light',
				fontSize: 57,
				fontStyle: 'italic'
			}
		})
	},
	degree: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 46,
		textAlign: 'center',
		color: 'black',
		...Platform.select({
			ios: {
				fontFamily: 'Zapfino',
				fontSize: 70,
				paddingRight: 13,
				marginBottom: -30
			},
			android: {
				fontSize: 120,
				marginVertical: -30,
				paddingLeft: 25,
				fontFamily: 'Charmonman'
			}
		})
	},
	title: {
		color: 'black',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingBottom: 40
	},
	keynote: {
		color: 'black',
		textAlign: 'justify',
		fontSize: 23,
		textShadowColor: '#C1C1C1',
		textShadowOffset: { width: -0.3, height: 0.7 },
		textShadowRadius: 1,
		paddingHorizontal: 2,
		...Platform.select({
			ios: {
				fontWeight: 'bold'
			},
			android: {
				fontFamily: 'sans-serif-condensed',
				fontWeight: 'bold',
				fontSize: 27
			}
		})
	},
	descriptionContainer: {
		width: '100%',
		borderRadius: 5,
		...Platform.select({
			ios: {
				paddingBottom: 15
			},
			android: {
				paddingBottom: -15
			}
		})
	},
	description: {
		paddingHorizontal: 5,
		paddingTop: 10,
		justifyContent: 'center',
		textAlign: 'justify',
		alignItems: 'center',
		lineHeight: 30,
		color: 'black',
		fontWeight: 'bold',
		...Platform.select({
			ios: {
				fontFamily: 'Helvetica',
				fontSize: 22,
				fontWeight: '400'
			},
			android: {
				fontSize: 23,
				fontWeight: '800'
			}
		})
	},
	goBackButtonContainer: {
		marginTop: 40,
		alignItems: 'center',
	},
	goBackButtonText: {
		fontStyle: 'italic',
		fontSize: 25,
		textShadowColor: 'white',
		textShadowOffset: { width: -0.3, height: 0.7 },
		textShadowRadius: 1,
		...Platform.select({
			ios: {
				fontFamily: 'Helvetica-Oblique',
				color: 'black',
			},
			android: {
				color: 'black',
				fontFamily: 'monospace',
				fontWeight: 'bold',
				width: 70
			}
		})
	}
})
export default styles;