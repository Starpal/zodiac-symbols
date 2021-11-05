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
				marginTop: 240,
				marginBottom: 87,
				justifyContent: 'center',
				alignItems: 'center',
				transform: [{ scaleX: 1.5 }, { scaleY: 1.6 }]
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
				backgroundColor: 'rgba(255, 255, 255, 0.25)',
				width: 145,
				color: '#FAFBFE',
				marginTop: 25
			}
		})
	},
	signPickerItem: {
		...Platform.select({
			ios: {
				fontFamily: 'PingFangHK-Regular',
				fontSize: 45,
				color: '#FAFBFE'
			},
			android: {
				width: 100
			}
		})
	},
	degreePickerItem: {
		...Platform.select({
			ios: {
				fontFamily: 'HiraKakuProN-W3',
				fontSize: 40,
				color: '#FAFBFE'
			},
			android: {
				width: 100
			}
		})
	},
	buttonSubmit: {
		backgroundColor: "rgba(220,220,180, 0.25)",
		height: 70,
		borderColor: 'transparent',
		alignItems: "center",
		...Platform.select({
			ios: {
				marginTop: 80,
			},
			android: {
				marginTop: 87,
				height: 73,
			}
		})
	},
	buttonSubmitText: {
		fontSize: 55,
		color: "rgba(0,0,0, 0.55)",
		...Platform.select({
			ios: {
				fontFamily: 'Optima-BoldItalic',
				fontWeight: '900',
				paddingTop: 1
			},
			android: {
				fontSize: 51,
				fontStyle: 'italic',
				fontWeight: 'bold'
			}
		})
	}
})

export default styles;