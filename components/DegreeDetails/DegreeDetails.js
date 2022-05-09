import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
	View,
	ImageBackground,
	Text,
	TouchableOpacity,
	Animated
} from "react-native";
import styles from "./styles";
import { OPTIONS, IOS, ANDROID } from "../../utils/costants";
import { useCollapsibleHeader } from "react-navigation-collapsible";
import { Switch } from "react-native-switch";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function DegreeDetails({ apiImg, sign, degree, title, keynote, description }) {
	
	const [toggleSwitch, setToggleSwitch] = useState(false);
	const [backgroundImg, setBackgroundImg] = useState()

	const navigation = useNavigation();

	useEffect(() => { 
		setBackgroundImg(apiImg)
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={ ANDROID.tablet || IOS.tablet ? 
						{marginRight: 30, marginTop: 20} : {marginRight: 20} }>
					<Switch
						activeText={''}
						inActiveText={''}
						barHeight={ANDROID.tablet || IOS.tablet ? 30 : 18}
						circleSize={ANDROID.tablet || IOS.tablet ? 50 : 30}
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
								size={ANDROID.tablet || IOS.tablet ? 30 : 21}
								color="#404040"/>
							: <MaterialCommunityIcons
								name="glasses"
								size={ANDROID.tablet || IOS.tablet ? 30 : 21}
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
		paddingTop: ANDROID. tablet || IOS.tablet ? 95 : containerPaddingTop
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
							IOS.tablet && {minHeight: '100%'}] }>
						<View style={[styles.main, toggleSwitch && { backgroundColor: "#ded9d6"} ]}>
							<Text style={[ IOS.platform && IOS.iphone ? {marginTop: 3} : {marginTop: 0},
										styles.sign]}>
								{sign}
							</Text>
							<Text style={styles.degree}>{'\t'}{degree + "°"}{'\t'}</Text>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.keynote}>
								{keynote}
								{"\n"}
							</Text>
							<View style={[ styles.descriptionContainer, IOS.tablet && {paddingBottom: 40},
								!toggleSwitch && {
									backgroundColor: IOS.platform
											? "rgba(253, 251, 253, 0.2)"
											: "rgba(223, 231, 253, 0.4)",
									}]}>
								<Text style={styles.description}>{description}</Text>
							</View>
						</View>
						<TouchableOpacity 
							style={toggleSwitch ? [styles.goBackButtonContainer, styles.goBackButtonToogled]
									: styles.goBackButtonContainer } 
							onPress={() => navigation.navigate("Home")}>
							<Text style={styles.goBackButtonText}>Home</Text>
						</TouchableOpacity>
					</Animated.ScrollView>
				</ImageBackground>
			}
	</>);
}