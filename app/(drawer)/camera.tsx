import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCameraDevice, Camera } from 'react-native-vision-camera'

export default function camera() {
    const device = useCameraDevice('back')

    // if (device == null) return <NoCameraErrorView />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
}

const styles = StyleSheet.create({})