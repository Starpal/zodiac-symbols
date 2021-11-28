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
	const [sign, setSign] = useState("Sign");
	const [degree, setDegree] = useState("Degree");

	useEffect(() => {
		queryDBsky
	}, []);

	/* by submitting the form, we navigate to the 'Results' 
	 screen passing sign and degree params */
	const onSubmit = () => {
		navigation.navigate("Results", {
			sign,
			degree});
	};

	const thirtyDegrees = Array.from(Array(30), (_, i) => (i+1));
	
	return (
		<ImageBackground source={queryDBsky} style={styles.homePageImage}>
			<View style={styles.main}>
				<View style={styles.pickerContainer}>
				<Picker 
					style={styles.picker}
					selectedValue={sign} 
					onValueChange={(signValue) => setSign(signValue)}
					itemStyle={styles.signPickerItem}>
						{ SIGNS.map((sign, id) =>
							<Picker.Item key={id} label={sign} value={sign} />
						)}
				</Picker>
				</View>
				<View style={[styles.pickerContainer, { marginTop: 35 }]}>
				<Picker 
					mode="modal" 
					style={styles.picker} 
					selectedValue={degree}
					onValueChange={(degreeValue) => setDegree(degreeValue)}
					itemStyle={styles.degreePickerItem}>
						<Picker.Item label={'Degree'}/>
						{ thirtyDegrees.map((degree, id) =>
							<Picker.Item key={id} label={degree + '°'} value={degree} />
						)}
				</Picker>
				</View>
			</View>
			<TouchableOpacity 
				onPress={onSubmit} 
				style={styles.buttonSubmit}>
					<Text style={styles.buttonSubmitText}>
						{'\t'}Search{'\t'}
					</Text>
			</TouchableOpacity>
		</ImageBackground>
  	);
}
