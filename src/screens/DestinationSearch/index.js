import {View, Text, TextInput, StyleSheet, SafeAreaView} from "react-native";
import React, {useEffect, useState} from "react";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function DestinationSearch() {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const [originPlace, setOriginPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('its working');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder="Form"
          style={styles.textInput}
          onChangeText={setFromText}
          value={fromText}
        />
        <TextInput
          placeholder="Where To?"
          style={styles.textInput}
          onChangeText={setDestinationText}
          value={destinationText}
        />

        <GooglePlacesAutocomplete
          styles={{textInput: styles.textInput}}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          query={{
            key: "",
            language: "en",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{textInput: styles.textInput}}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          query={{
            key: "",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: "#eee",
    marginVertical: 5,
    padding: 10,
  },
  container: {
    padding: 10,
    height: "100%",
    backgroundColor: "#fff",
  },
});
