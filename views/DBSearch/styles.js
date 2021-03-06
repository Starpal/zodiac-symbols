import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	homePageImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	main: {
		...Platform.select({
			ios: {
				marginTop: '35%',
			},
			android: {
				marginTop: '70%',
				marginBottom: 87,
				justifyContent: 'center',
				alignItems: 'center',
				transform: [{ scaleX: 1.5 }, { scaleY: 1.6 }]
			}
		})
	},
	main_Iphone5: {
		...Platform.select({
			ios: {
				marginTop: '5%'
			}
		})
	},
	pickerContainer:{
		...Platform.select({
			android: {
				borderRadius: 20,
				overflow: 'hidden',
				marginBottom: 10
			}
		})
	},
	signPicker: {
		...Platform.select({
			android: {
				width: 150,
			}
		})
	},
	picker: {
		...Platform.select({
			ios: {
				fontSize: 60,
				marginVertical: 7
			},
			android: {
				backgroundColor: 'rgba(255, 255, 255, 0.20)',
				width: 145,
				color: '#FAFBFE'
			}
		})
	},
	signPickerItem: {
		...Platform.select({
			ios: {
				fontSize: 45,
				color: '#FAFBFE'
			}
		})
	},
	degreePickerItem: {
		...Platform.select({
			ios: {
				fontSize: 45,
				color: '#FAFBFE',
				marginTop: -40
			}
		})
	},
	buttonSubmit: {
		borderColor: 'transparent',
		alignItems: "center",
		height: 80,
		position: 'absolute',
		width: '100%',
		bottom: '10%',
		...Platform.select({
			ios: {
				backgroundColor: "rgba(220,220,180, 0.20)",	
			},
			android: {
				backgroundColor: "rgba(220,220,180, 0.2)",
			}
		})
	},
	buttonSubmitText: {
		color: "rgba(0, 0, 0, 0.63)",
		textShadowColor: "rgb(255, 251, 204)",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		textAlign: 'center',
		...Platform.select({
			ios: {
				fontSize: 60,
				fontFamily: 'Optima-BoldItalic',
				fontWeight: '900',
				paddingTop: 2
			},
			android: {
				fontSize: 71,
				fontFamily: 'Satisfy',
				top: '-10%'
			}
		})
	},
	buttonSubmitTextOK: {
		color: "rgba(0, 0, 0, 0.63)",
		textShadowOffset: { width: 2, height: 1 },
		textShadowColor: "rgb(255, 251, 204)",
		textShadowRadius: 10,
		textAlign: 'center',
		...Platform.select({
			ios: {
				fontSize: 60,
				fontFamily: 'Optima-BoldItalic',
				fontWeight: '900',
				paddingTop: 2
			},
			android: {
				fontSize: 70,
				fontFamily: 'Satisfy',
				top: '-10%'
			}
		})
	},
	errorContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		textAlign: 'left',
		marginLeft: '-2%',
		marginTop: '-2%',
		...Platform.select({
			ios: {
				textAlign: 'center',
				marginLeft: '28%',
				marginRight: 'auto'
			}
		})
	},
	errorContainerAndroid: {
		marginTop: 2
	},
	error: {
		textAlign: 'center',
		color: 'red',
		fontStyle: 'italic',
		fontSize: 13,
		paddingLeft: 7,
		...Platform.select({
			ios: {
				fontSize: 21
			}
		})
	},
	errorShades: {
		textShadowColor: 'rgba(0, 0, 0, 0.9)',
		textShadowOffset: { width: 0.3, height: -0.2 },
		textShadowRadius: 3
	}
})

export default styles;