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
				marginTop: 160,
			},
			android: {
				marginTop: 270,
				marginBottom: 87,
				justifyContent: 'center',
				alignItems: 'center',
				transform: [{ scaleX: 1.5 }, { scaleY: 1.6 }]
			}
		})
	},
	pickerContainer:{
		...Platform.select({
			android: {
				borderRadius: 20,
				overflow: 'hidden'
			}
		})
	},
	picker: {
		...Platform.select({
			ios: {
				fontSize: 60,
				marginVertical: 5
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
		...Platform.select({
			ios: {
				backgroundColor: "rgba(220,220,180, 0.20)",
				bottom: 90
			},
			android: {
				backgroundColor: "rgba(220,220,180, 0.2)",
				bottom: 70
			}
		})
	},
	buttonSubmitText: {
		color: "rgba(0, 0, 0, 0.6)",
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
		textShadowColor: "rgb(255, 251, 204)",
		textShadowOffset: { width: -2, height: 1 },
		textShadowRadius: 20,
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
		paddingTop: 2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		textAlign: 'left',
		marginLeft: '-2%',
		...Platform.select({
			ios: {
				textAlign: 'center',
				marginLeft: '28%',
				marginRight: 'auto'
			}
		})
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
	}
})

export default styles;