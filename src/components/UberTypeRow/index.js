import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UberTypeRow({types}) {
  const {price, type, duration} = types;
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type}
          <Ionicons name={"person"} size={12} />3
        </Text>
        <Text style={styles.time}>8:03 DROP OFF</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={12} color={"green"} />
        <Text style={styles.price}>est. ${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  right: {},
  type: {fontWeight: 'bold', fontSize: 18, marginBottom: 5},
  time: {color: "#5d5d5d"},
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {fontWeight: "bold", fontSize: 18, marginLeft: 6},
});
