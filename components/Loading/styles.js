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
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 15,
		...Platform.select({
			android: {
				color: 'rgba(0, 0, 0, 0.65)',
				marginTop: 320,
				fontSize: 70,
				fontFamily: 'BirthstoneBmedium'
			},
			ios: {
				color: 'rgba(0, 0, 0, 0.8)',
				marginTop: 435,
				fontSize: 80
			}
		})
	},
})
export default styles;