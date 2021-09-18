import React from 'react';
import 'react-native-gesture-handler';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
	return (
		<ImageBackground source={require('../../static/images/MOON2.jpg')} style={styles.homePageImage}>
			<View style={styles.homeDiv}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DBSearch')}>
					<Text style={styles.buttonText_search}>Degree Search</Text></TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Random')}>
					<Text style={styles.buttonText_inspired}> ...get Inspired!</Text></TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

export default HomeScreen;
