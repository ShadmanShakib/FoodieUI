import * as React from "react";
import { Authentication } from "../auth";
import DrawerNavigation from "./DrawerNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../NotFoundScreen";
import { Text } from "native-base";
import { SingleDish } from "../dishes";

type IStackNavigationRoutes = {
  Auth: undefined;
  Root: undefined;
  NotFound: undefined;
  SingleDish: undefined;
};

export default function StackNavigation() {
  const Stack = createStackNavigator<IStackNavigationRoutes>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={Authentication}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Root"
        component={DrawerNavigation}
      />
      <Stack.Screen component={SingleDish} name="SingleDish" options={{}} />
    </Stack.Navigator>
  );
}

function Home() {
  return <Text>This is home</Text>;
}
