import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNavigation from "./BottomTabNavigation";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
}
