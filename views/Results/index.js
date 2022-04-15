import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Loading from "../../components/Loading/Loading";
import DegreeDetails from "../../components/DegreeDetails/DegreeDetails";
import { getDegreeSearch, getRandomDegree, getRandomSky } from "../../utils/API";

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
				screen === "DBSearch" ? 
					<Loading type="DBSearch"/> : <Loading type="random"/>
			)}
		</>
	);
}
