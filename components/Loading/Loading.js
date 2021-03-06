import React, { useState, useEffect } from "react";
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { PULSE, IOS, ANDROID } from '../../utils/costants';
import blackHole from "../../static/images/blackHole.jpeg"
import blackHoleRvt from "../../static/images/blackHolervt.jpeg"

export default function Loading({ type }) {

	const [loadingBg, setLoadingBg] = useState();

	useEffect(() => {
		type === 'random' ? 
			setLoadingBg(blackHole) : setLoadingBg(blackHoleRvt)
	}, []);

	return (
		<>
		{loadingBg &&
			<ImageBackground source={loadingBg} style={styles.loadingPageImage}>
				<View style={styles.main}>
					<Animatable.Text
						animation={PULSE}
						easing="ease-out"
						iterationCount="infinite"
						style={[styles.loadingText, IOS.tablet ? {marginTop: '60%', fontSize: 50} 
								: IOS.iphoneScreen ? {marginTop: '98%'} : {marginTop: '78%'}, 
									ANDROID.tablet && {marginTop: '80%', fontSize: 68}
						 		]}>
						Loading...
					</Animatable.Text>
				</View>
			</ImageBackground>}
		</>
	)
}