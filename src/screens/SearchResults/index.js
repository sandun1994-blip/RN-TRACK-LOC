import {View, Text, Dimensions} from "react-native";
import React from "react";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";
import RouteMap from "../../components/RouteMap";
import {useRoute} from '@react-navigation/native'
export default function SearchResults() {

const route =useRoute()
const {originPlace,destinationPlace} =route.params

console.log('process.env',process.env.API_KEY);
  return (
    <View style={{display: "flex", justifyContent: "space-between"}}>
      <View style={{height: Dimensions.get("window").height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace}/>
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}
