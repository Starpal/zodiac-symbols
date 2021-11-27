import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getDegreeSearch } from "../../utils/API";
import util from "../../utils/util";

export default function ResultsScreen({ route }) {
	/* Get param from DBSearch navigation */
	const { sign, degree } = route.params;
	const [isLoaded, setIsLoaded] = useState(false);
	const [searchDegree, setSearchDegree] = useState([]);
	const [randomSky, setRandomSky] = useState();

	useEffect(() => {
		const searchDegreeArray = [];
		getDegreeSearch(sign, degree)
			.then((search) => {
				searchDegreeArray.push(search);
				setSearchDegree(searchDegreeArray);
				setIsLoaded(true);
				setRandomSky(util.getRandomSky());
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
				<Loading type="DBSearch"/>
			)}
		</>
		);
}
