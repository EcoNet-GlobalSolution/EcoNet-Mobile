import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export type IconNameType = keyof typeof Entypo.glyphMap;

interface TabBarButtonProps extends PressableProps {
  title?: string;
  isFocused?: boolean;
  iconName?: IconNameType;
}

export default function DrawerButton({
  title = "",
  isFocused = false,
  iconName,
  ...rest
}: TabBarButtonProps) {
  return (
    <Pressable style={styles.button} {...rest}>
      <View style={styles.content}>
        <Entypo name={iconName} size={32} color="#3AFFFF" style={styles.icon}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    gap: 12,
    flexDirection: "row",
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 25
  },
  icon:{
    backgroundColor: "#000",
    padding: 6,
    borderRadius: 25
  }
});
