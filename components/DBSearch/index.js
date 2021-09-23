import 'react-native-gesture-handler';
import { View, TouchableOpacity, Text, FormValidationMessage, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { Picker } from '@react-native-community/picker';
import { API_URL } from "@env";

class DBSearch extends React.Component {
	state = {
		error: null,
		sign: 'Aries',
		degree: '1',
		title: '',
		keynote: '',
		description: ''
	}

	onSubmit = async () => {
		const { sign, degree } = this.state
		await fetch(`${API_URL}/DBdegree`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'cache-control': 'no-cache'
			},
			body: JSON.stringify({
				sign: sign,
				degree: degree
			})
		})
			.then((res) => res.json(res))
			.then((data) => {
				this.props.navigation.navigate('Results', {
					sign: data.sign,
					degree: data.degree,
					title: data.title,
					keynote: data.keynote,
					description: data.description
				})
		})
			.catch((err) => {
				console.log('There has been a problem with your DBSearch operation: ' + err.message);
				throw err;
			});
	}

	render() {
		return (
			<ImageBackground source={require('../../static/images/search4.jpeg')} style={styles.homePageImage}>
				<View style={styles.main}>
					<Picker
						selectedValue={this.state.sign}
						onValueChange={(signValue) => this.setState({ sign: signValue })}
						style={styles.picker} itemStyle={styles.signPickerItem}>
						<Picker.Item label="Aries" value="Aries" />
						<Picker.Item label="Taurus" value="Taurus" />
						<Picker.Item label="Gemini" value="Gemini" />
						<Picker.Item label="Cancer" value="Cancer" />
						<Picker.Item label="Leo" value="Leo" />
						<Picker.Item label="Virgo" value="Virgo" />
						<Picker.Item label="Libra" value="Libra" />
						<Picker.Item label="Scorpio" value="Scorpio" />
						<Picker.Item label="Sagittarius" value="Sagittarius" />
						<Picker.Item label="Capricorn" value="Capricorn" />
						<Picker.Item label="Aquarius" value="Aquarius" />
						<Picker.Item label="Pisces" value="Pisces" />
					</Picker>
					<Picker
						mode='dropdown'
						selectedValue={this.state.degree}
						onValueChange={(degreeValue) => this.setState({ degree: degreeValue })}
						style={styles.picker} itemStyle={styles.degreePickerItem}>
						<Picker.Item label="01°" value="1" />
						<Picker.Item label="02°" value="2" />
						<Picker.Item label="03°" value="3" />
						<Picker.Item label="04°" value="4" />
						<Picker.Item label="05°" value="5" />
						<Picker.Item label="06°" value="6" />
						<Picker.Item label="07°" value="7" />
						<Picker.Item label="08°" value="8" />
						<Picker.Item label="09°" value="9" />
						<Picker.Item label="10°" value="10" />
						<Picker.Item label="11°" value="11" />
						<Picker.Item label="12°" value="12" />
						<Picker.Item label="13°" value="13" />
						<Picker.Item label="14°" value="14" />
						<Picker.Item label="15°" value="15" />
						<Picker.Item label="16°" value="16" />
						<Picker.Item label="17°" value="17" />
						<Picker.Item label="18°" value="18" />
						<Picker.Item label="19°" value="19" />
						<Picker.Item label="20°" value="20" />
						<Picker.Item label="21°" value="21" />
						<Picker.Item label="22°" value="22" />
						<Picker.Item label="23°" value="23" />
						<Picker.Item label="24°" value="24" />
						<Picker.Item label="25°" value="25" />
						<Picker.Item label="26°" value="26" />
						<Picker.Item label="27°" value="27" />
						<Picker.Item label="28°" value="28" />
						<Picker.Item label="29°" value="29" />
						<Picker.Item label="30°" value="30" />
					</Picker>
				</View>
				<TouchableOpacity onPress={this.onSubmit} style={styles.buttonSubmit}>
					<Text style={styles.buttonSubmitText}>Submit</Text>
				</TouchableOpacity>
			</ImageBackground>

		);
	};
}

export default DBSearch;
