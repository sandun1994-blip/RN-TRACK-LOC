import {View, Text} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import CovideMessage from '../../components/CovidMessage';
import HomeSearch  from '../../components/HomeSearch'

export default function HomeScreen() {
  return (
    <View>
      <HomeMap />
      <CovideMessage/>
      <HomeSearch/>
     
    </View>
  );
}
