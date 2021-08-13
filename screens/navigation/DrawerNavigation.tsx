import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import BottomTabNavigation from "./BottomTabNavigation";
import { Box, Drawer, Text } from "native-base";
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { DrawerImage } from "../../components/cards";
import { Order } from "../user";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerImage />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        activeTintColor="#FA4A0C"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}
type IDrawerNavigation = {
  Feed: undefined;
  Order: undefined;
};

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator<IDrawerNavigation>();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{ headerShown: false, drawerActiveTintColor: "#FA4A0C" }}
        name="Feed"
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        options={{ headerShown: false, drawerActiveTintColor: "#FA4A0C" }}
        name="Order"
        component={Order}
      />
    </Drawer.Navigator>
  );
}
