import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { ImageBackground } from 'react-native';
import Loading from "../../components/Loading/Loading";
import styles from '../../components/Loading/styles';
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getRandomDegree } from "../../utils/API";
import blackHole from "../../static/images/blackHole.jpeg";
import util from "../../utils/util";

export default function SearchScreen() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [randomSky, setRandomSky] = useState();
	const [randomDegree, setRandomDegree] = useState([]);

	useEffect(() => {
		getRandomDegree()
			.then((random) => {
				setRandomSky(util.getRandomSky())
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
					randomSky={randomSky} /> ))
			) : (
				<ImageBackground source={blackHole} style={styles.loadingPageImage}>
					<Loading />
				</ImageBackground>
			)}
		</>
	);
}
