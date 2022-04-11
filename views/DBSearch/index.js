import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { SIGNS } from "../../utils/costants";
import { getRandomSky } from "../../utils/API";
import nightSky from "../../static/images/search4.jpeg";
import * as Animatable from "react-native-animatable";
import { PULSE } from "../../utils/costants";
import { Octicons } from "@expo/vector-icons";

export default function DBSearch({ navigation }) {
	const [sign, setSign] = useState("Sign");
	const [degree, setDegree] = useState("Degree");
	const [showSignError, setSignError] = useState(false);
	const [showDegreeError, setDegreeError] = useState(false);
	const [apiImg, setApiImg] = useState([]);

	useEffect(() => {
		getRandomSky()
			.then((Img) => {
				setApiImg(Img);
			});
	}, []);

	useEffect(() => {
		(sign !== "Sign" && setSignError(false)) ||
		(degree !== "Degree" && setDegreeError(false));
	});

	const onSubmit = () => {
		return	sign === "Sign" && degree === "Degree" ? setSignError(true)|| setDegreeError(true) 
					: sign === "Sign" ? setSignError(true) 
						: degree === "Degree" ? setDegreeError(true) 
							: navigation.navigate("Results", {
									sign,
									degree,
									apiImg
								});
	};

	// Generate an array of 30° & add 'Degree' placeholder at the beginning.
	const thirtyDegrees = Array.from(Array(30), (_, i) => i + 1);
	thirtyDegrees.unshift("Degree");

	const fieldsAreFilled = sign !== "Sign" && degree !== "Degree";
	return (
		<ImageBackground source={nightSky} style={styles.homePageImage}>
			<View style={styles.main}>
				<View style={styles.pickerContainer}>
				<Picker
					style={styles.picker}
					selectedValue={sign}
					onValueChange={(signValue) => setSign(signValue)}
					itemStyle={styles.signPickerItem} >
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
					<View style={styles.errorContainer}>
						<Octicons name="telescope" size={Platform.OS == "ios" ? 25 : 16} color="red"/>
						<Text style={styles.error}>We need a Sign...</Text>
					</View>
				)}
				<View style={[styles.pickerContainer, { marginTop: 35 }]}>
				<Picker
					mode="modal"
					style={styles.picker}
					selectedValue={degree}
					onValueChange={(degreeValue) => setDegree(degreeValue)}
					itemStyle={styles.degreePickerItem} >
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
					<View style={styles.errorContainer}>
						<Octicons name="telescope" size={Platform.OS == "ios" ? 25 : 16} color="red"/>
						<Text style={styles.error}>..at some Degree</Text>
					</View>
				)}
			</View>
		
			<TouchableOpacity 
				onPress={onSubmit} 
				style={[styles.buttonSubmit, fieldsAreFilled ? {marginTop: 65}: {marginTop: 40}]}>
				<Animatable.Text
					animation={fieldsAreFilled ? PULSE : null}
					easing="ease-out"
					iterationCount='infinite' 
					style={ fieldsAreFilled ? styles.buttonSubmitTextOK 
						: styles.buttonSubmitText }>
					{"\t"}Search {"\t"}
				</Animatable.Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}
