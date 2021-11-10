import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import styles from './styles';
import Loading from '../../components/Loading';
import DegreeDetails from '../../components/DegreeDetails';
import { getRandomDegree } from '../../utils/API';

export default function SearchScreen() {

	const [isLoaded, setIsLoaded] = useState(false);
	const [randomDegree, setRandomDegree] = useState([]);

	useEffect(() => {
		getRandomDegree()
			.then((random) => {
				setRandomDegree(random);
				setIsLoaded(true);
		})
	}, [])

	return (
		<>
			{isLoaded ? randomDegree.map(data =>
				<DegreeDetails key={data.id}
					sign={data.sign}
					degree={data.degree}
					title={data.title}
					keynote={data.keynote}
					description={data.description} />
				) : (
					<ImageBackground 
						source={require('../../static/images/blackHole.jpeg')} 
						style={styles.loadingPageImage}>
						<Loading />
					</ImageBackground>
				)}
		</>
	)
}