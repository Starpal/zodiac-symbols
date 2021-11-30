import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { SIGNS } from '../../utils/costants';
import nightSky from "../../static/images/search4.jpeg";

export default function DBSearch({ navigation }) {
	const [sign, setSign] = useState("Sign");
	const [degree, setDegree] = useState("Degree");
	const [showSignError, setShowSignError] = useState(false);
	const [showDegreeError, setShowDegreeError] = useState(false);

	useEffect(()=> {
		sign !== 'Sign' && setShowSignError(false) ||
		degree !== 'Degree' && setShowDegreeError(false)
	});

	const onSubmit = () => {
		if (sign === 'Sign' && degree === 'Degree') {
			setShowSignError(true)
			setShowDegreeError(true)
		} else if (sign === 'Sign') {
			setShowSignError(true)
		} else if (degree === 'Degree'){
			setShowDegreeError(true)
		} else {
		// By submitting the form, we navigate to 'Results' Screen, passing sign and degree params.
			navigation.navigate("Results", {
				sign,
				degree})
		}
	};

	// Generate an array of 30° & add 'Degree' placeholder at the beginning.
	const thirtyDegrees = Array.from(Array(30), (_, i) => (i + 1));
	thirtyDegrees.unshift('Degree')

	return (
		<ImageBackground source={nightSky} style={styles.homePageImage}>
			<View style={styles.main}>
				<View style={styles.pickerContainer}>
				<Picker 
					style={styles.picker}
					selectedValue={sign} 
					onValueChange={(signValue) => setSign(signValue)}
					itemStyle={styles.signPickerItem}>
						{ SIGNS.map((sign, id) => (
							<Picker.Item key={id} label={sign} value={sign}
								style={id !== 0 ? {color: 'black'} : {color: 'gray'}}
								enabled={id !== 0} />
						)
						)}
				</Picker>
				</View>
				{showSignError && 
					<Text style={{color: '#F53D2B', fontStyle: 'italic'}}>We need a sign..</Text>
				}
				<View style={[styles.pickerContainer, { marginTop: 35 }]}>
				<Picker 
					mode="modal"
					placeholder={"ciao"}
					style={styles.picker} 
					selectedValue={degree}
					onValueChange={(degreeValue) => setDegree(degreeValue)}
					itemStyle={styles.degreePickerItem}>
						{ thirtyDegrees.map((degree, id) =>
							<Picker.Item key={id} value={degree} 
								label={degree[0] ? degree : degree + '°'}
								style={degree[0] ? {color: 'gray'} : {color: 'black'}}
								enabled={degree[0] && false}/>
						)}
				</Picker>
				</View>
				{showDegreeError && 
					<Text style={{color: '#F53D2B', fontStyle: 'italic'}}>..missing degree</Text>
				}
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
