import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import styles from "./styles/styles";
import { OPTIONS } from "../utils/costants";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import util from "../utils/util";
import { Animated } from "react-native";

export default function DegreeDetails({ toggleSwitch, sign, degree, title, keynote, description }) {

	const [randomSky, setRandomSky] = useState();
	const navigation = useNavigation();

	useEffect(() => {
		setRandomSky(util.getRandomSky())
	}, [])
	
	const {
		onScroll,
		containerPaddingTop,
		scrollIndicatorInsetTop,
	} = useCollapsibleHeader(OPTIONS);

  	return (
		<ImageBackground source={toggleSwitch ? null : randomSky} style={styles.homePageImage}>
			<Animated.ScrollView
				onScroll={onScroll}
				scrollIndicatorInsets={{ top: scrollIndicatorInsetTop, right: 1 }}
				contentContainerStyle={{
				paddingVertical: 20,
				paddingTop: containerPaddingTop
				}}>
				<View style={[styles.main, toggleSwitch && { backgroundColor: "#ded9d6" }]}>
					<Text style={styles.sign}>{sign}</Text>
					<Text style={[styles.degree, {fontFamily: Platform.OS == "android" && 'Charmonman'}]}>{degree + "°"}</Text>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.keynote }>
						{keynote}
						{"\n"}
					</Text>
					<View style={[ styles.descriptionContainer, !toggleSwitch && {
						backgroundColor:
							Platform.OS == "ios"
								? "rgba(223, 231, 253, 0.3)"
								: "rgba(223, 231, 253, 0.4)",
						}]}>
						<Text style={styles.description}>{description}</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.goBackButtonContainer} onPress={() => navigation.navigate("Home")}>
					<Text style={styles.goBackButtonText}>Home</Text>
				</TouchableOpacity>
			</Animated.ScrollView>
		</ImageBackground>
  	);
}
