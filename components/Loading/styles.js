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
		textShadowRadius: 10,
		...Platform.select({
			android: {
				color: 'rgba(0, 0, 0, 0.7)',
				marginTop: '94%',
				fontSize: 55,
				fontFamily: 'BirthstoneBregular'
			},
			ios: {
				color: 'rgba(0, 0, 0, 0.8)',
				marginTop: '98%',
				fontSize: 35,
				fontFamily: 'Zapfino'
			}
		})
	}
})
export default styles;