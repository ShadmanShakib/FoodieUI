import * as React from "react";
import { Authentication } from "../auth";
import DrawerNavigation from "./DrawerNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../NotFoundScreen";
import { Text } from "native-base";

type IStackNavigationRoutes = {
  Auth: undefined;
  Root:
    | undefined
    | {
        Feed: {
          Home: undefined;
          Favorite: undefined;
        };
      };
  NotFound: undefined;
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
    </Stack.Navigator>
  );
}

function Home() {
  return <Text>This is home</Text>;
}
