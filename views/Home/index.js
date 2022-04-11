import React from 'react';
import "react-native-gesture-handler";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import styles from "./styles";
import homeBg from "../../static/images/MOON3.jpg"

function HomeScreen({ navigation }) {

  return (
	<ImageBackground
	  	source={homeBg}
		style={styles.homePageImage}>
		<View style={styles.homeDiv}>
			<TouchableOpacity style={[styles.button, { width: 220 }]} 
				onPress={() => navigation.navigate("DBSearch")}>
				<Text style={styles.buttonText_degrees}>
					Degrees
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, { width: 235 }]} 
				onPress={() => navigation.navigate("Random")}>
				<Text style={styles.buttonText_inspired}>
					..get inspired!
				</Text>
			</TouchableOpacity>
		</View>
	</ImageBackground>
	);
}

export default HomeScreen;
