import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { 
	View,
	TouchableOpacity,
	Text,
	ImageBackground
} from "react-native";
import * as Animatable from 'react-native-animatable';
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { SIGNS, PULSE, IOS, ANDROID } from "../../utils/costants";
import nightSky from "../../static/images/search.jpeg";
import { Octicons } from "@expo/vector-icons";

export default function DBSearch({ navigation }) {
	const [sign, setSign] = useState("Sign");
	const [degree, setDegree] = useState("Degree");
	const [showSignError, setSignError] = useState(false);
	const [showDegreeError, setDegreeError] = useState(false);

	useEffect(() => {
		(sign !== "Sign" && setSignError(false)) 
			|| (degree !== "Degree" && setDegreeError(false));
	});

	const onSubmit = () => {
		return	sign === "Sign" && degree === "Degree" ? setSignError(true)|| setDegreeError(true) 
					: sign === "Sign" ? setSignError(true) 
						: degree === "Degree" ? setDegreeError(true) 
							: navigation.navigate("Results", {
									screen: "DBSearch",
									sign,
									degree });
	};

	// Generate an array of 30° & add 'Degree' placeholder at the beginning.
	const thirtyDegrees = Array.from(Array(30), (_, i) => i + 1);
	thirtyDegrees.unshift("Degree");

	const fieldsAreFilled = sign !== "Sign" && degree !== "Degree";

	return (
		<ImageBackground source={nightSky} style={styles.homePageImage}>
			<View style={IOS.platform && IOS.iphone5Screen ? styles.main_Iphone5 : styles.main}>
				<View style={styles.pickerContainer}>
				<Picker
					style={[styles.picker, styles.signPicker, ANDROID.tablet && {width: 220}]}
					dropdownIconColor='#FAFBFE'
					selectedValue={sign}
					onValueChange={(signValue) => setSign(signValue)}
					itemStyle={[styles.signPickerItem, IOS.tablet && {fontSize: 65}]}>
						{ SIGNS.map((sign, id) => (
							<Picker.Item
								key={id}
								label={sign}
								value={sign}
								style={id !== 0 ? { color: "black" } : { color: "gray" }}
								enabled={id !== 0} />
						))}
				</Picker>
				</View>
				{showSignError && (
					<View style={[styles.errorContainer, IOS.tablet && { marginLeft: '38%' },
							ANDROID.tablet && styles.errorContainerAndroid]}>
						<Octicons
							color="red"
							name="telescope"
							style={styles.errorShades} 
							size={IOS.platform ? 25 : 16} />
						<Text style={[styles.error, styles.errorShades, IOS.tablet && { fontSize: 30 }]}>
							We need a Sign..
						</Text>
					</View>
				)}
				<View style={[styles.pickerContainer, { marginTop: 35 }]}>
				<Picker
					mode="modal"
					style={[styles.picker, ANDROID.tablet && {width: 200}]}
					dropdownIconColor='#FAFBFE'
					selectedValue={degree}
					onValueChange={(degreeValue) => setDegree(degreeValue)}
					itemStyle={[styles.degreePickerItem, IOS.tablet && {fontSize: 65}]} >
						{ thirtyDegrees.map((degree, id) => (
							<Picker.Item
								key={id}
								value={degree}
								label={degree[0] ? degree : degree + "°"}
								style={degree[0] ? { color: "gray" } : { color: "black" }}
								enabled={degree[0] && false} />
						))}
				</Picker>
				</View>
				{showDegreeError && (
					<View style={[styles.errorContainer, 
						ANDROID.tablet && styles.errorContainerAndroid,
							IOS.tablet && {marginLeft: '38%'}]}>
						<Octicons
							color="red"
							name="telescope"
							style={styles.errorShades} 
							size={IOS.platform ? 25 : 16} />
						<Text style={[styles.error, styles.errorShades, IOS.tablet && {fontSize: 30}]}>
								..at some Degree
						</Text>
					</View>
				)}
			</View>
			<TouchableOpacity 
				onPress={onSubmit} 
				style={[styles.buttonSubmit, 
					IOS.tablet && {height: 110, alignItems: 'center'},
					fieldsAreFilled ? {marginTop: 65} : {marginTop: 40}]}>
				<Animatable.Text
					animation={fieldsAreFilled ? PULSE : null}
					easing="ease-out"
					iterationCount='infinite' 
					style={ fieldsAreFilled ?
						[styles.buttonSubmitTextOK, IOS.tablet && {fontSize: 80}] 
						: [styles.buttonSubmitText, IOS.tablet && {fontSize: 80}]}>
					{"\t"}Search {"\t"}
				</Animatable.Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}
