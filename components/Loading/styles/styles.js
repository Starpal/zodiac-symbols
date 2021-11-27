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
})
export default styles;