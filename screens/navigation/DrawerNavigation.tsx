import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNavigation from "./BottomTabNavigation";

type IDrawerNavigation = {
  Feed: undefined;
};
export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator<IDrawerNavigation>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Feed"
        component={BottomTabNavigation}
      />
    </Drawer.Navigator>
  );
}
