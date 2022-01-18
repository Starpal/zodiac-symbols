import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import Loading from "../../components/Loading/Loading";
import styles from "../../components/Loading/styles";
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getDegreeSearch } from "../../utils/API";
import blackHoleRvt from "../../static/images/blackHolervt.jpeg";
import util from "../../utils/util";

export default function ResultsScreen({ route }) {
	/* Get param from DBSearch navigation */
	const { sign, degree } = route.params;
	const [isLoaded, setIsLoaded] = useState(false);
	const [randomSky, setRandomSky] = useState();
	const [searchDegree, setSearchDegree] = useState([]);
	
	useEffect(() => {
		const searchDegreeArray = [];
		getDegreeSearch(sign, degree)
			.then((search) => {
				setRandomSky(util.getRandomSky())
				searchDegreeArray.push(search);
				setSearchDegree(searchDegreeArray);
				setIsLoaded(true);
			});
	}, []);

	return (
		<>
			{isLoaded ? (searchDegree.map((data) => (
				<DegreeDetails
					key={data._id}
					sign={data.sign}
					degree={data.degree}
					title={data.title}
					keynote={data.keynote}
					description={data.description}
					randomSky={randomSky} /> ))
			) : (
				<ImageBackground source={blackHoleRvt} style={styles.loadingPageImage}>
					<Loading  />
				</ImageBackground>
			)}
		</>
		);
}
