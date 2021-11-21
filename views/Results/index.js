import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import styles from '../Search/styles';
import Loading from '../../components/Loading';
import DegreeDetails from '../../components/DegreeDetails';
import { getDegreeSearch } from '../../utils/API';
import blackHoleRevert from '../../static/images/blackHolervt.jpeg'

export default function ResultsScreen({ route }) {
	/* Get param from DBSearch navigation */
	const { sign, degree } = route.params;
	const [isLoaded, setIsLoaded] = useState(false)
	const [searchDegree, setSearchDegree] = useState([]);

	useEffect(() => {
		const searchDegreeArray = []
		getDegreeSearch(sign, degree)
			.then((search) => {
				searchDegreeArray.push(search)
				setSearchDegree(searchDegreeArray)
				setIsLoaded(true)
		})
	}, [])
	
	return (
		<>
			{isLoaded ? searchDegree.map((data) => 
				<DegreeDetails
					id={data._id}
					sign={data.sign}
					degree={data.degree}
					title={data.title}
					keynote={data.keynote}
					description={data.description} />
				) : (
					<ImageBackground 
						source={blackHoleRevert}
						style={styles.loadingPageImage}>
						<Loading />
					</ImageBackground>
				)}
		</>
	)
}
