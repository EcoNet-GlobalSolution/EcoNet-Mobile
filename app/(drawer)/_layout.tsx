import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import DrawerContent from "@/components/DrawerContent";
import { CustomOptions } from "@/types/navigation";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: 300,
            backgroundColor: "#3AFFFF",
            borderRadius: 25,
          },
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={
            {
              drawerLabel: "Home",
              drawerPosition: "right",
              title: "Home",
              iconName: "home",
            } as CustomOptions
          }
        />
        <Drawer.Screen
          name="map"
          options={
            {
              drawerLabel: "Mapa",
              drawerPosition: "right",
              title: "Mapa",
              iconName: "map",
            } as CustomOptions
          }
        />
        <Drawer.Screen
          name="camera"
          options={
            {
              drawerLabel: "Câmera",
              drawerPosition: "right",
              title: "Câmera",
              iconName: "camera",
            } as CustomOptions
          }
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
