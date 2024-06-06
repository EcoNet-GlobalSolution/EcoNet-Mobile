import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import DrawerButton from "./DrawerButton";
import { CustomOptions } from "@/types/navigation";

export default function DrawerContent(
  drawerProps: DrawerContentComponentProps
) {
  return (
    <View style={styles.background}>
        <Image 
        source={require("../assets/images/EcoNetMenu.png")}
        style={styles.logo}
        resizeMode="contain"
        />
        <View style={styles.container} >
        {drawerProps.state.routes.map((route, index) => {
        const isFocused = drawerProps.state.index === index
        const options = drawerProps.descriptors[route.key]
          .options as CustomOptions;

          

          const onPress = ()=> {
            const event = drawerProps.navigation.emit({
                type: "drawerItemPress",
                canPreventDefault: true,
                target: route.key
            })
            if(!isFocused && !event.defaultPrevented){
                drawerProps.navigation.navigate(route.name, route.params)
            }
          }

         
        return (
          <DrawerButton
            key={index}
            title={options.title}
            iconName={options.iconName}
            onPress={onPress}
          />
        );
      })}
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    left: -85,
    top: 100,
    height: 20,
  },
  container:{
    flex: 1,
    marginTop: 180,
    alignItems: "flex-start",
    marginLeft: 70,
    gap: 10,
  }
});
