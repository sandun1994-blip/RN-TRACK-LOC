import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'

export default function SearchResults() {
  return (
    <View>
      <HomeMap/>
      <UberTypes/>
    </View>
  )
}