import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import { Authentication } from "../auth";

type IStackNavigationRoutes = {
  Auth: undefined;
  Root: undefined;
};
export default function Root() {
  const Stack = createStackNavigator<IStackNavigationRoutes>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={Authentication}
      />
      <Stack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
}
