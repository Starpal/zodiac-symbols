import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "../Search/styles";
import util from "../../utils/util";
import { API_URL } from "@env";

export default function ResultsScreen({ route, navigation }) {
  /* Get param from DBSearch navigation */
  const { sign, degree } = route.params;
  const [isLoaded, setIsLoaded] = useState(false);
  const [signo, setSign] = useState();
  const [grado, setDegree] = useState();
  const [title, setTitle] = useState();
  const [keynote, setKeynote] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
	fetch(`${API_URL}/DBdegree`, {
	  method: "POST",
	  headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"cache-control": "no-cache",
	  },
	  body: JSON.stringify({
		sign: sign,
		degree: degree,
	  }),
	})
	  .then((res) => res.json())
	  .then((data) => {
		setIsLoaded(true);
		setSign(data.sign);
		setDegree(data.degree);
		setTitle(data.title);
		setKeynote(data.keynote);
		setDescription(data.description);
	  })
	  .catch((err) => {
		console.log(
		  "There has been a problem with your DBSearch operation: " +
			err.message
		);
		throw err;
	  });
  }, []);

  return (
	<>
	  {isLoaded ? (
		<ImageBackground source={util.getRandomSky()} style={styles.homePageImage}>
		  <ScrollView contentContainerStyle={styles.scroll} scrollIndicatorInsets={{ right: 1 }}>
			<Text style={styles.sign}>{signo}</Text>
			<View style={styles.main}>
			  <Text style={styles.degree}>{grado + "°"}</Text>
			  <Text style={styles.title}>{title}</Text>
			  <Text style={styles.keynote}>
				{keynote}
				{"\n"}
			  </Text>
			  <View style={styles.descriptionContainer}>
				<Text style={styles.description}>{description}</Text>
			  </View>
			  <TouchableOpacity style={styles.goBackButtonContainer} onPress={() => navigation.navigate("Home")}>
				<Text style={styles.goBackButtonText}>Home</Text>
			  </TouchableOpacity>
			</View>
		  </ScrollView>
		</ImageBackground>
	  ) : (
		<ImageBackground source={require("../../static/images/blackHolervt.jpeg")} style={styles.loadingPageImage}>
		  <View style={styles.main}>
			<Text style={styles.loadingText}>loading...</Text>
		  </View>
		</ImageBackground>
	  )}
	</>
  );
}
