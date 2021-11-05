import React, { useEffect, useState, useLayoutEffect } from "react";
import "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import styles from "./styles";
import { API_URL } from "@env";
import { Switch } from "react-native";
import Loading from "../../components/Loading";
import DegreeDetails from "../../components/DegreeDetails";

export default function SearchScreen({ navigation }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sign, setSign] = useState();
  const [degree, setDegree] = useState();
  const [title, setTitle] = useState();
  const [keynote, setKeynote] = useState();
  const [description, setDescription] = useState();
  const [toggleSwitch, setToggleSwitch] = useState(false);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("cache-control", "no-cache");
    myHeaders.append("Accept", "application/json");
    fetch(`${API_URL}/degree`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true),
          setSign(data[0].sign),
          setDegree(data[0].degree),
          setTitle(data[0].title),
          setKeynote(data[0].keynote),
          setDescription(data[0].description);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("response.data", error.response.data);
          console.log("response.status", error.response.status);
          console.log("response.headers", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("e.request", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(
            "There has been a problem with getting RANDOM operation: " +
              error.message
          );
        }

        throw error;
      });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Switch
          value={toggleSwitch}
          onValueChange={(value) => setToggleSwitch(value)}
        />
      ),
    });
  }, [toggleSwitch]);

  return (
    <>
      {isLoaded ? (
        <DegreeDetails
          sign={sign}
          degree={degree}
          title={title}
          keynote={keynote}
          description={description}
          toggleSwitch={toggleSwitch}/>
      ) : (
        <ImageBackground source={require("../../static/images/blackHole.jpeg")} style={styles.loadingPageImage}>
          <Loading />
        </ImageBackground>
      )}
    </>
  );
}
