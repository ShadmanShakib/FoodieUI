import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { Root } from "./screens";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Root />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
