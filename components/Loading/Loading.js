import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { PULSE } from '../../utils/costants';

export default function Loading() {
	return (
			<View style={styles.main}>
				<Animatable.Text
					animation={PULSE}
					easing="ease-out"
					iterationCount="infinite"
					style={styles.loadingText}>
					Loading...
				</Animatable.Text>
			</View>
		)
	}