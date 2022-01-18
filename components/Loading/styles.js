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
		textShadowColor: 'rgba(255, 255, 255, 0.9)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 15,
		...Platform.select({
			android: {
				fontSize: 46,
				color: "rgba(0, 0, 0, 0.75)",
				marginTop: 340,
				fontFamily: 'BirthstoneBregular'
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