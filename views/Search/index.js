import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getRandomDegree } from "../../utils/API";
import util from "../../utils/util";

export default function SearchScreen() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [randomDegree, setRandomDegree] = useState([]);
	const [randomSky, setRandomSky] = useState();

	useEffect(() => {
		getRandomDegree()
			.then((random) => {
				setRandomDegree(random);
				setIsLoaded(true);
				setRandomSky(util.getRandomSky());
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
				<Loading type="random"/>
			)}
		</>
	);
}
