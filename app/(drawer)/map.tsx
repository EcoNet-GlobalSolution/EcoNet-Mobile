import { Alert, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";

export default function map() {
  const [markers, setMarkers] = useState([]);

  const getMarkers = async () => {
    let m: any = [];
    try {
      const querySnapshot = await getDocs(collection(db, "detections"));
      querySnapshot.forEach((doc) => {
        console.log(doc);
        const marker = {
          id: doc.id,
          latitude: doc.data().latitude,
          longitude: doc.data().longitude,
          species: doc.data().species
        };
        m.push(marker);
      });
    } catch (error) {
      console.error(error);
    }
    setMarkers(m);
    console.log(markers);
  };

  const onMarkerSelected = (marker:any)=>{
    Alert.alert("Espécie detectada: " + marker.species)
  }
  useEffect(() => {
    getMarkers();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView style={StyleSheet.absoluteFill}>
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker} onPress={()=> onMarkerSelected(marker)}/>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({});
