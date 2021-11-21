import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import styles from "./styles/styles";
import { OPTIONS } from "../utils/costants";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import util from "../utils/util";
import { Animated } from "react-native";
import { Switch } from "react-native-switch";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function DegreeDetails({ id, sign, degree, title, keynote, description }) {
	
	const [randomSky, setRandomSky] = useState();
	const [toggleSwitch, setToggleSwitch] = useState(false);
	
	const navigation = useNavigation();

	useEffect(() => {
		setRandomSky(util.getRandomSky())
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{ marginRight: 18 }}>
					<Switch
						activeText={''}
						inActiveText={''}
						barHeight={15}
						circleSize={25}
						circleBorderWidth={0}
						switchWidthMultiplier={1}
						backgroundActive={"#19a093"}
						backgroundInactive={"#767577"}
						circleActiveColor={"#66c0b7"}
						circleInActiveColor={"#f4f3f4"}
						switchRightPx={3}
						switchLeftPx={3}
						useNativeDriver={true}
						renderInsideCircle={() => toggleSwitch === true ? 
							<Ionicons name="planet-outline" size={20} color="#404040"/>
							: <MaterialCommunityIcons name="glasses" size={20} color="#404040"/>}
						value={toggleSwitch}
						onValueChange={(value) => setToggleSwitch(value)} />
				</View>
			)
		})
	}, [toggleSwitch]);

	const {
		onScroll,
		containerPaddingTop,
		scrollIndicatorInsetTop,
	} = useCollapsibleHeader(OPTIONS);

  	return (
		<ImageBackground source={toggleSwitch ? null : randomSky} style={styles.homePageImage}>
			<Animated.ScrollView
				key={id}
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
								: "rgba(223, 231, 253, 0.42)",
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
