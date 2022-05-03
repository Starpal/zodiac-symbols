import React, { useEffect, useState, useRef } from 'react';
import "react-native-gesture-handler";
import {
	View,
	TouchableOpacity,
	Text,
	ImageBackground,
	Animated,
	useWindowDimensions
} from "react-native";
import styles from "./styles";

const FadeInView = (props) => {
	const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
	useEffect(() => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 700,
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

	const [backgroundImg, setBackgroundImg] = useState();

	const { height } = useWindowDimensions();

	useEffect(() => { 
			setBackgroundImg(homeBg)
	}, []);

  return (
	<>
		{backgroundImg &&
			<FadeInView>
				<ImageBackground
					source={homeBg}
					style={styles.homePageImage}>
					<View style={styles.homeDiv}>
						<TouchableOpacity style={[styles.button, 
							{ width: Platform.OS == "ios" && height > 1300 ? 400 : 220 }]}
							onPress={() => navigation.navigate("DBSearch")}>
							<Text style={[styles.buttonText_degrees, 
									Platform.OS == "ios" && height > 1300 && {fontSize: 40}]}>
								Search
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button,
							Platform.OS == "ios" && height > 1300 ? {width: 435, marginTop: '9%'} : {width: 235} ]}
							onPress={() => navigation.navigate("Results", {screen: 'Random'})}>
							<Text style={[styles.buttonText_inspired,
									Platform.OS == "ios" && height > 1300 && {fontSize: 42, paddingBottom: 4}]}>
								..get inspired!
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</FadeInView>
		}
	</>
	)
}

export default HomeScreen;
