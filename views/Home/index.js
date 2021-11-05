import React from "react";
import "react-native-gesture-handler";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import styles from "./styles";
// import { Lato_400Regular, Lato_400Regular_Italic } from "@expo-google-fonts/lato";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

function HomeScreen({ navigation }) {
// 	let [fontsLoaded] = useFonts({
// 		Lato_400Regular,
// 		Lato_400Regular_Italic,
// 		Charmonman_400Regular
//   });

//   if (!fontsLoaded) {
// 	return <AppLoading />;
//   }

  return (
	<ImageBackground
	  source={require("../../static/images/MOON2.jpg")}
	  style={styles.homePageImage}>
	  <View style={styles.homeDiv}>
		<TouchableOpacity style={[styles.button, { width: 220, elevation: 2 }]} onPress={() => navigation.navigate("DBSearch")}>
		  <Text style={[styles.buttonText_search, { fontFamily: "Lato_400Regular" }]}>
			Degrees
		  </Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.button, { width: 235, elevation: 2 }]} onPress={() => navigation.navigate("Random")}>
		  <Text style={[styles.buttonText_inspired, { fontFamily: "Lato_400Regular_Italic" }]}>
			..get inspired!
		  </Text>
		</TouchableOpacity>
	  </View>
	</ImageBackground>
  );
}

export default HomeScreen;
