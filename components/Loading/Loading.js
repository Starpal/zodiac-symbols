import React, { useEffect } from "react";
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { PULSE } from '../../utils/costants';
import blackHole from "../../static/images/blackHole.jpeg"
import blackHoleRvt from "../../static/images/blackHolervt.jpeg"

export default function Loading({ type }) {

	let backgroundImg = type === 'random' ? blackHole : blackHoleRvt

	useEffect(() => {
		backgroundImg
	}, []);

	return (
		<ImageBackground source={backgroundImg} style={styles.loadingPageImage}>
			<View style={styles.main}>
				<Animatable.Text
					animation={PULSE}
					easing="ease-out"
					iterationCount="infinite"
					style={styles.loadingText}>
					Loading...
				</Animatable.Text>
			</View>
		</ImageBackground>
		)
	}