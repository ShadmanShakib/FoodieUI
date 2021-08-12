import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "./components/ui";
import Linking from "./screens/navigation/Linking";
import StackNavigation from "./screens/navigation/StackNavigation";
export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer linking={Linking}>
        <StackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
