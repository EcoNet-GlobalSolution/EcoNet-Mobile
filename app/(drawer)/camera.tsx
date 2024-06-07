import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from "react-native";
import React, { useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import axios from "axios";

export default function camera() {
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true, skipProcessing: true };

    try {
      const picture = await cameraRef.current.takePictureAsync(options);
      const source = picture.uri;
      if (source) {
        console.log(inference(source));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inference = async (picture: string) => {

    try {
      const data = await axios.post(
        "https://detect.roboflow.com/detection-of-aquatic-species/3?api_key=4wUw37wevzug0F9i7cHA",
        {
          picture: picture,
        },
        {
          headers: {
            "Content-Type": "application-json",
          },
        }
      );
      return data;
    } catch (error) {
      Alert.alert("Ocorreu um erro!")
      console.log(error)
    }
    
    
  };
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Tirar foto</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
