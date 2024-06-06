import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function map() {
  return (
    <View style={{flex:1}}>
      <MapView style={StyleSheet.absoluteFill} />
    </View>
  )
}

const styles = StyleSheet.create({})