import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { ImageBackground } from 'react-native';
import Loading from "../../components/Loading/Loading";
import styles from '../../components/Loading/styles';
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getRandomDegree, getRandomSky } from "../../utils/API";
import blackHole from "../../static/images/blackHole.jpeg";

export default function SearchScreen() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [randomDegree, setRandomDegree] = useState([]);

	const [apiImg, setApiImg] = useState([]);

	useEffect(() => {
		getRandomSky()
			.then((Img) => {
				setApiImg(Img);
			});
	}, []);

	useEffect(() => {
		getRandomDegree()
			.then((random) => {
				setRandomDegree(random);
				setIsLoaded(true);
			});
		}, []);
		
	return (
		<>
			{isLoaded ? (randomDegree.map((data) => (
				<DegreeDetails
					key={data._id}
					sign={data.sign}
					degree={data.degree}
					title={data.title}
					keynote={data.keynote}
					description={data.description} 
					apiImg={apiImg}/> ))
			) : (
				<ImageBackground source={blackHole} style={styles.loadingPageImage}>
					<Loading />
				</ImageBackground>
			)}
		</>
	);
}
