/* eslint-disable prettier/prettier */
import {View, Text, Pressable} from "react-native";
import React from "react";
import UberTypeRow from "../UberTypeRow";
import types from "../../assets/data/types";

export default function UberTypes() {
  const confirm=()=>{

  }
  
  return (
    <View>
      {types.map(type => (
        <UberTypeRow key={type.id} types={type} />
      ))}

      <Pressable onPress={confirm} style={{backgroundColor:'black',padding:10,margin:10,alignItems:'center'}}>

<Text style={{color:'white',fontWeight:'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
}
