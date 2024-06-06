import { Pressable, StyleSheet, Image } from "react-native"
import { Slot, useNavigation } from "expo-router"
import { DrawerActions } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { FontAwesome5 } from '@expo/vector-icons';

export default function Layout() {
  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
        <Image 
        source={require("../assets/images/EcoNet.png")}
        style={styles.logo}
        resizeMode="contain"
        />
      <Pressable onPress={toggleMenu} style={styles.menu}>
      <FontAwesome5 name="ellipsis-h" size={24} color="#3AFFFF" />
      </Pressable>

      <Slot />
    </>
  )
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    right: 32,
    top: 52,
    zIndex: 1,
  },
  logo: {
    position: "absolute",
    left: -110,
    top: 52,
    zIndex: 1,
    height: 20
  }
})