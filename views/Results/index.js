import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import Loading from "../../components/Loading/Loading";
import styles from "../../components/Loading/styles";
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getDegreeSearch, getRandomDegree, getRandomSky } from "../../utils/API";
import blackHoleRvt from "../../static/images/blackHolervt.jpeg";

export default function ResultsScreen({ route }) {
	/* Get param from DBSearch navigation */
	const { sign, degree, screen } = route.params;
	const [isLoaded, setIsLoaded] = useState(false);
	const [getDegree, setGetDegree] = useState([]);
	const [apiImg, setApiImg] = useState([]);

	useEffect(() => {
		getRandomSky()
			.then((Img) => {
				setApiImg(Img);
			});
	}, []);

	useEffect(() => {
		const searchDegreeArray = [];
		screen === 'DBSearch' ?
		getDegreeSearch(sign, degree)
			.then((search) => {
				searchDegreeArray.push(search);
				setGetDegree(searchDegreeArray);
				setIsLoaded(true);
			}) 
			: getRandomDegree()
				.then((random) => {
					setGetDegree(random);
					setIsLoaded(true);
		});
	}, []);

	return (
		<>
			{isLoaded ? (
				getDegree.map((data) => (
					<DegreeDetails
						key={data._id}
						sign={data.sign}
						degree={data.degree}
						title={data.title}
						keynote={data.keynote}
						description={data.description}
						apiImg={apiImg}
					/>
				))
			) : (
				<ImageBackground source={blackHoleRvt} style={styles.loadingPageImage}>
					<Loading />
				</ImageBackground>
			)}
		</>
	);
}
