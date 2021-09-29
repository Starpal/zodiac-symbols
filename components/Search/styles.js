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
	scroll: {
		paddingVertical: 20
	},
	loadingPageImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		opacity: 0.8
	},
	loadingText: {
		textAlign: 'center',
		fontStyle: 'italic',
		marginTop: 435,
		fontSize: 50,
		paddingLeft: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 15,
		...Platform.select({
			android: {
				color: 'rgba(0, 0, 0, 0.6)',
				marginTop: 350,
				fontSize: 40
			},
			ios: {
				color: 'rgba(0, 0, 0, 0.8)'
			}
		})
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 15,
		fontSize: 60,
		textAlign: 'center',
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
				marginTop: 75,
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
				fontSize: 90,
				marginVertical: 35,
				paddingLeft: 25
			}
		})
	},
	title: {
		color: 'black',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingBottom: 35
	},
	keynote: {
		color: 'black',
		textAlign: 'justify',
		fontSize: 23,
		fontStyle: 'italic',
		textShadowColor: '#C1C1C1',
		textShadowOffset: { width: -0.3, height: 0.7 },
		textShadowRadius: 1,
		paddingLeft: 10,
		paddingRight: 10,
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
				paddingBottom: 15,
				backgroundColor: 'rgba(223, 231, 253, 0.4)'
			},
			android: {
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
				fontSize: 24,
				fontWeight: '800'
			}
		})
	},
	goBackButtonContainer: {
		marginTop: 40
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
				fontWeight: 'bold'
			}
		})
	}
})
export default styles;