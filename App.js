import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import AppLoading from "expo-app-loading";
import useFonts from './hooks/useFonts';
import Home from './views/Home/index';
import DBSearch from './views/DBSearch/index';
import Results from './views/Results/index';
import homeBg from "./static/images/MOON3.jpeg";
import { IOS, ANDROID } from "./utils/costants";

const Stack = createStackNavigator();

export default function App({ navigation }) {

	const [IsReady, SetIsReady] = useState(false);

	//prefetch home page image
	const fetchHomepageBg = async() => {
		const image = [require("./static/images/MOON3.jpeg")];
		const cacheImage = image.map(image => {
		  return Asset.fromModule(image).downloadAsync();
		})
		return Promise.all(cacheImage);
	};
	
	//prefetch fonts
	const LoadFonts = async () => {
    	await useFonts();
  	};

	const _preLoadsAsync = async () => {
		const fonts = LoadFonts();
		const homeBg = fetchHomepageBg();

		await Promise.all([fonts, homeBg])
	};

  	if (!IsReady) {
    	return (
     		<AppLoading
        		startAsync={_preLoadsAsync}
        		onFinish={() => SetIsReady(true)}
        		onError={console.warn}
      		/>
    	);
  	}

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ title: '', headerBackTitleVisible: ''}}>
				<Stack.Screen 
					name="Home"
					options={{ headerTransparent: true }}>
					{props => <Home {...props} homeBg={homeBg}/>}
				</Stack.Screen>
				<Stack.Screen
					name="DBSearch"
					component={DBSearch} navigation={navigation}
					options={{headerTransparent: true,
					headerBackImage: () => {
						return(
							<View style={[IOS.tablet ? { marginLeft: 25,  marginTop: 18} : { marginLeft: 10 },
									ANDROID.tablet && { marginLeft: 25, marginTop: 10 }]}>
								<Ionicons 
									name="arrow-back"
									size={IOS.tablet || ANDROID.tablet ? 40 : 30}
									color="rgb(222, 101, 111)"/>
							</View>)}
						}}
					/>
				<Stack.Screen
					name="Results"
					component={Results} navigation={navigation}
					options={{ headerTransparent: true, 
						headerBackImage: () => {
							return(
								<View style={[IOS.tablet ? { marginLeft: 25,  marginTop: 20 } : { marginLeft: 5 },
										ANDROID.tablet && { paddingLeft: 25, paddingTop: 17 }]}>
									<Ionicons 
										name="arrow-back"
										size={IOS.tablet || ANDROID.tablet ? 40 : 28}
										color="rgba(0, 0, 0, 0.8)"/>
								</View>)}
						}}
					/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
