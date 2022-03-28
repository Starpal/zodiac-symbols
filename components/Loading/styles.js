import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	loadingPageImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		opacity: 0.8
	},
	loadingText: {
		textAlign: 'center',
		paddingLeft: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.9)',
		textShadowOffset: { width: 1, height: -2 },
		textShadowRadius: 9,
		...Platform.select({
			android: {
				fontSize: 44,
				color: "rgba(255, 255, 255, 0.50)",
				marginTop: 375,
				fontFamily: 'LatoItalic'
			},
			ios: {
				fontSize: 40,
				color: 'rgba(0, 0, 0, 0.95)',
				marginTop: 390,
				fontFamily: 'Zapfino'
			}
		})
	},
})
export default styles;