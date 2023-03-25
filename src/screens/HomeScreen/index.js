import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import CovideMessage from '../../components/CovidMessage';
import HomeSearch  from '../../components/HomeSearch'
import RouteMap from '../../components/RouteMap';

export default function HomeScreen() {
  return (
    <View>
            <View style={{height: Dimensions.get('window').height-400}}>
        <HomeMap />
      </View> 

      <CovideMessage/>
      <HomeSearch/>
     
    </View>
  );
}
