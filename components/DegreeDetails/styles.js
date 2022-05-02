import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	homePageImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		...Platform.select({
			ios: {
				opacity: 0.83
			},
			android: {
				opacity: 0.73
			}
		})
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 60,
		textAlign: 'center',
		...Platform.select({
			ios: {
				marginHorizontal: 15,
				paddingTop: 35,
			},
			android : {
				paddingTop: 20,
				marginHorizontal: 10
			}
		})
	},
	sign: {
		fontWeight: 'bold',
		color: '#0D0D3E',
		textAlign: 'center',
		justifyContent: 'center',
		...Platform.select({
			ios: {
				marginBottom: 60,
				fontFamily: 'Optima-BoldItalic',
				fontSize: 65,
			},
			android: {
				marginTop: 10,
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
		marginVertical: -30,
		...Platform.select({
			ios: {
				fontFamily: 'Zapfino',
				fontSize: 70,
				paddingRight: 13
			},
			android: {
				fontSize: 120,
				paddingLeft: 25,
				fontFamily: 'Charmonman'
			}
		})
	},
	title: {
		width: '99%',
		color: 'black',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 40,
		
		...Platform.select({
			ios: {
				marginTop: 30,
			},
			android: {
				marginTop: 15
			}
		})
	},
	keynote: {
		width: '99%',
		color: 'black',
		textAlign: 'justify',
		textShadowColor: '#C1C1C1',
		textShadowOffset: { width: -0.3, height: 0.7 },
		textShadowRadius: 1,
		...Platform.select({
			ios: {
				fontSize: 26,
				fontWeight: 'bold'
			},
			android: {
				fontFamily: 'sans-serif-condensed',
				fontWeight: 'bold',
				fontSize: 27,
			}
		})
	},
	descriptionContainer: {
		width: '100%',
		borderRadius: 15,
		...Platform.select({
			ios: {
				paddingBottom: 15
			},
			android: {
				paddingBottom: 3
			}
		})
	},
	description: {
		paddingHorizontal: 5,
		paddingTop: 10,
		justifyContent: 'center',
		textAlign: 'justify',
		alignItems: 'center',
		fontSize: 23,
		lineHeight: 30,
		color: 'black',
		fontWeight: 'bold',
		...Platform.select({
			ios: {
				fontFamily: 'Helvetica',
				fontWeight: '400'
			},
			android: {
				fontWeight: '800'
			}
		})
	},
	goBackButtonContainer: {
		marginTop: '11%',
		marginHorizontal: 100,
		borderRadius: 30,
		alignItems: "center",
		padding: 11,
		marginBottom: '7%',
		...Platform.select({
			ios: {
				backgroundColor: 'rgba(255, 255, 255, 0.3)',
			},
			android: {
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				elevation: 7
			}
		})
		
	},
	goBackButtonText: {
		color: 'black',
		fontSize: 25,
		textShadowColor: 'white',
		textShadowOffset: { width: -0.3, height: 0.7 },
		textShadowRadius: 1,
		textAlign: "center",
		...Platform.select({
			ios: {
				fontFamily: 'Helvetica-Oblique'
			},
			android: {
				fontStyle: 'italic',
				fontFamily: 'monospace',
				fontWeight: 'bold',
				width: 70
			}
		})
	}
})
export default styles;