import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  View,
  TouchableOpacity,
  Text,
  FormValidationMessage,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { SIGNS } from '../../utils/costants';
import queryDBsky from "../../static/images/search4.jpeg";

export default function DBSearch({ navigation }) {
	const [sign, setSign] = useState("Aries");
	const [degree, setDegree] = useState("1");

	useEffect(() => {
		queryDBsky
	}, []);

	const onSubmit = () => {
		navigation.navigate("Results", {
			sign,
			degree});
	};

	const thirtyDegrees = Array.from(Array(30), (_, i) => i+1)

	return (
		<ImageBackground source={queryDBsky} style={styles.homePageImage}>
			<View style={styles.main}>
				<Picker 
					style={styles.picker}
					selectedValue={sign} 
					onValueChange={(signValue) => setSign(signValue)}
					itemStyle={styles.signPickerItem}>
						{ SIGNS.map((sign, id) =>
							<Picker.Item key={id} label={sign} value={sign} />
						)}
				</Picker>
				<Picker 
					mode="modal" 
					style={styles.picker} 
					selectedValue={degree}
					onValueChange={(degreeValue) => setDegree(degreeValue)}
					itemStyle={styles.degreePickerItem}>
						{ thirtyDegrees.map((degree, id) =>
							<Picker.Item key={id} label={degree + '°'} value={degree} />
						)}
				</Picker>
			</View>
			<TouchableOpacity 
				onPress={onSubmit} 
				style={styles.buttonSubmit}>
				<Text style={[styles.buttonSubmitText, {fontFamily: 'LatoBoldItalic'}]}>
					Submit
				</Text>
			</TouchableOpacity>
		</ImageBackground>
  	);
}
