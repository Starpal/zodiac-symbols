import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from '../Search/styles';
import util from '../../utils/util'

export default function ResultsScreen({ route, navigation }) {
	/* Get param from DBSearch navigation */
	const { sign, degree, title, keynote, description } = route.params;

	return (
		<ImageBackground source={util.getRandomSky()} style={styles.homePageImage}>
			<ScrollView contentContainerStyle={styles.scroll} scrollIndicatorInsets={{ right: 1 }}>
				<Text style={styles.sign}>{sign}</Text>
				<View style={styles.main}>
					<Text style={styles.degree}>{degree + '°'}</Text>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.keynote}>
						{keynote}
						{'\n'}
					</Text>
					<View style={styles.descriptionContainer}>
						<Text style={styles.description}>{description}</Text>
					</View>
					<TouchableOpacity style={styles.goBackButtonContainer}
						onPress={() => navigation.navigate('Home')}>
						<Text style={styles.goBackButtonText}>Home</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	)
}