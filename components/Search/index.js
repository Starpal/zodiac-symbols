import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import styles from './styles';
import util from '../../utils/util';
import { API_URL } from "@env";
import * as Animatable from 'react-native-animatable';
import { PULSE } from '../../utils/costants';

export default class SearchScreen extends React.Component {
	state = {
		error: null,
		isLoaded: false,
		sign: '',
		degree: '',
		title: '',
		keynote: '',
		description: '',
	};

	componentDidMount = () => {
		this.getRandomDegree();
	};

	getRandomDegree = async () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		myHeaders.append('cache-control', 'no-cache');
		myHeaders.append('Accept', 'application/json');
		await fetch(`${API_URL}/degree`, {
			method: 'GET',
			headers: myHeaders,
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					isLoaded: true,
					sign: data[0].sign,
					degree: data[0].degree,
					title: data[0].title,
					keynote: data[0].keynote,
					description: data[0].description
				});
			})
			.catch((error) => {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log("response.data", error.response.data);
					console.log("response.status", error.response.status);
					console.log("response.headers", error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log("e.request", error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('There has been a problem with getting RANDOM operation: ' + error.message);
				}

				throw error;
			});
	};

	render() {
		const { isLoaded, sign, degree, title, keynote, description } = this.state;

		if (!isLoaded) {
			return (
				<ImageBackground source={require('../../static/images/blackHole.jpeg')} style={styles.loadingPageImage}>
					<View style={styles.main}>
						<Animatable.Text
							animation={PULSE}
							easing="ease-out"
							iterationCount="infinite"
							style={styles.loadingText}>
								Loading...
						</Animatable.Text>
					</View>
				</ImageBackground>)
		} else {
			return (
				<ImageBackground source={util.getRandomSky()} style={styles.homePageImage}>
					<ScrollView contentContainerStyle={styles.scroll} scrollIndicatorInsets={{ right: 1 }}>
						<View style={styles.main}>
							<Text style={styles.sign}>{sign}</Text>
							<Text style={styles.degree}>{degree + '°'}</Text>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.keynote}>
								{keynote}
								{'\n'}
							</Text>
							<View style={styles.descriptionContainer}>
								<Text style={styles.description}>{description}</Text>
							</View>
							<TouchableOpacity style={styles.goBackButtonContainer}
								onPress={() => this.props.navigation.navigate('Home')}>
								<Text style={styles.goBackButtonText}>Back </Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</ImageBackground>
			);
		}
	}
}
