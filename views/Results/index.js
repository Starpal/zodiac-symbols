import React, { useEffect, useState, useLayoutEffect } from 'react';
import 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import styles from '../Search/styles';
import { API_URL } from '@env';
import { Switch } from "react-native";
import Loading from '../../components/Loading';
import DegreeDetails from '../../components/DegreeDetails';

export default function ResultsScreen({ route, navigation, ...props }) {
	/* Get param from DBSearch navigation */
	const { sign, degree } = route.params;
	const [isLoaded, setIsLoaded] = useState(false)
	const [signo, setSign] = useState();
	const [grado, setDegree] = useState();
	const [title, setTitle] = useState();
	const [keynote, setKeynote] = useState();
	const [description, setDescription] = useState();
	const [toggleSwitch, setToggleSwitch] = useState(false);

	useEffect(() => {
		fetch(`${API_URL}/DBdegree`, {
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
			.then((res) => res.json())
			.then((data) => {
				setIsLoaded(true)
				setSign(data.sign)
				setDegree(data.degree)
				setTitle(data.title)
				setKeynote(data.keynote)
				setDescription(data.description)
			})
			.catch((err) => {
				console.log('There has been a problem with your DBSearch operation: ' + err.message);
				throw err;
			});
	}, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Switch
					//trackColor={{ true: null, false: Platform.OS == 'ios' == null }}
					trackColor={{ true: '#80CBC4', false: Platform.OS == 'ios' == null }}
					//thumbColor={{ toggleSwitch? Platform.OS && 'ios' && "#16A085" : null }}
					thumbColor={[Platform.OS == 'ios' ? (toggleSwitch ? '#16A085' : '#ffffff') : null]}
					value={toggleSwitch}
					onValueChange={(value) => setToggleSwitch(value)} />)
		});
	}, [toggleSwitch]);

	return (
		<>
			{isLoaded ?
				(<DegreeDetails
					sign={signo}
					degree={grado}
					title={title}
					keynote={keynote}
					description={description}
					toggleSwitch={toggleSwitch} />
				) : (
					<ImageBackground source={require('../../static/images/blackHolervt.jpeg')} style={styles.loadingPageImage}>
						<Loading />
					</ImageBackground>
				)}
		</>
	)
}