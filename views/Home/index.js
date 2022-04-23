import React, { useEffect, useRef } from 'react';
import "react-native-gesture-handler";
import { View, TouchableOpacity, Text, ImageBackground, Animated } from "react-native";
import styles from "./styles";

const FadeInView = (props) => {
	const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
	useEffect(() => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 1000,
				useNativeDriver: true
			}
		).start();
	}, [fadeAnim])
  
	return (
		<Animated.View
			style={{
				...props.style,
				opacity: fadeAnim}}>
			{props.children}
		</Animated.View>
	);
}

function HomeScreen({ navigation, homeBg }) {
  return (
	<FadeInView>
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
					onPress={() => navigation.navigate("Results", {screen: 'Random'})}>
					<Text style={styles.buttonText_inspired}>
						..get inspired!
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	</FadeInView>
	)
}

export default HomeScreen;
