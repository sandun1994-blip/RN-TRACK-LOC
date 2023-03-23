import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles'
export default function CovideMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Travel only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        project
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
}
