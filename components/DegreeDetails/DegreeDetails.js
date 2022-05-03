import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
	View,
	ImageBackground,
	Text,
	TouchableOpacity,
	Animated,
	useWindowDimensions
} from "react-native";
import styles from "./styles";
import { OPTIONS } from "../../utils/costants";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { Switch } from "react-native-switch";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function DegreeDetails({ apiImg, sign, degree, title, keynote, description }) {
	
	const [toggleSwitch, setToggleSwitch] = useState(false);
	const [backgroundImg, setBackgroundImg] = useState()

	const navigation = useNavigation();
	const { height } = useWindowDimensions();

	useEffect(() => { 
		setBackgroundImg(apiImg)
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={ Platform.OS == "ios" && height > 1300 ? 
						{marginRight: 30, marginTop: 20} : {marginRight: 20} }>
					<Switch
						activeText={''}
						inActiveText={''}
						barHeight={Platform.OS == "ios" && height > 1300 ? 30 : 18}
						circleSize={Platform.OS == "ios" && height > 1300 ? 50 : 30}
						circleBorderWidth={0}
						switchWidthMultiplier={1}
						backgroundActive={"#19a093"}
						backgroundInactive={"#767577"}
						circleActiveColor={"#66c0b7"}
						circleInActiveColor={"#f4f3f4"}
						switchRightPx={4}
						switchLeftPx={4}
						useNativeDriver={true}
						renderInsideCircle={() => toggleSwitch === true ? 
							<Ionicons
								name="planet-outline"
								size={Platform.OS == "ios" && height > 1300 ? 30 : 21}
								color="#404040"/>
							: <MaterialCommunityIcons
								name="glasses"
								size={Platform.OS == "ios" && height > 1300 ? 30 : 21}
								color="#404040"/>}
						value={toggleSwitch}
						onValueChange={(value) => setToggleSwitch(value)} />
				</View>
			)
		})
	}, [toggleSwitch]);

	/* Hiding navBar when scrolling down */

	const {
		onScroll,
		containerPaddingTop,
		scrollIndicatorInsetTop,
	} = useCollapsibleHeader(OPTIONS);

	const contentStyle = { 
		paddingVertical: 20, 
		paddingTop: Platform.OS == "ios" && height > 1300 ? 95 : containerPaddingTop
	}

  	return (
		<>
		{backgroundImg &&
			<ImageBackground source={!toggleSwitch ? 
				{uri: `data:${apiImg[0]};base64,${apiImg[1]}`} : null}
				style={[styles.homePageImage]}>
				<Animated.ScrollView
					onScroll={onScroll}
					scrollIndicatorInsets={{ top: scrollIndicatorInsetTop, right: 1 }}
					contentContainerStyle={[ contentStyle, toggleSwitch && { backgroundColor: "white"},
						Platform.OS == "ios" && height > 1300 && {minHeight: '100%'}] }>
					<View style={[styles.main, toggleSwitch && { backgroundColor: "#ded9d6"} ]}>
						<Text style={[ Platform.OS == "ios" && height > 700 ?
										{marginTop: 3} : {marginTop: 0},
									styles.sign]}>
							{sign}
						</Text>
						<Text style={styles.degree}>{'\t'}{degree + "°"}{'\t'}</Text>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.keynote}>
							{keynote}
							{"\n"}
						</Text>
						<View style={[ styles.descriptionContainer, 
								Platform.OS == "ios" && height > 1300 && {paddingBottom: 40},
						!toggleSwitch && {
							backgroundColor: Platform.OS == "ios"
									? "rgba(253, 251, 253, 0.2)"
									: "rgba(223, 231, 253, 0.4)",
							}]}>
							<Text style={styles.description}>{description}</Text>
						</View>
					</View>
					<TouchableOpacity 
						style={styles.goBackButtonContainer} 
						onPress={() => navigation.navigate("Home")}>
						<Text style={styles.goBackButtonText}>Home</Text>
					</TouchableOpacity>
				</Animated.ScrollView>
			</ImageBackground>}
		</>);
}