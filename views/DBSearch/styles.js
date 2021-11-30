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
				marginTop: 170,
			},
			android: {
				marginTop: 250,
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
				marginTop: 5,
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
				fontFamily: 'PingFangHK-Regular',
				fontSize: 45,
				color: '#FAFBFE'
			}
		})
	},
	degreePickerItem: {
		...Platform.select({
			ios: {
				fontFamily: 'HiraKakuProN-W3',
				fontSize: 40,
				color: '#FAFBFE'
			}
		})
	},
	buttonSubmit: {
		backgroundColor: "rgba(220,220,180, 0.25)",
		borderColor: 'transparent',
		alignItems: "center",
		...Platform.select({
			ios: {
				height: 70,
				marginTop: 80,
			},
			android: {
				marginTop: 90,
				height: 80
			}
		})
	},
	buttonSubmitText: {
		color: "rgba(0,0,0, 0.60)",
		...Platform.select({
			ios: {
				fontSize: 55,
				fontFamily: 'Optima-BoldItalic',
				fontWeight: '900',
				paddingTop: 1
			},
			android: {
				fontSize: 71,
				fontFamily: 'Satisfy',
				top: '-10%'
			}
		})
	},
	error: {
		color: '#F53D2B',
		fontStyle: 'italic'
	}
})

export default styles;