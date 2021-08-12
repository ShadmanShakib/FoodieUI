import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { RootNavigation } from "./screens/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Theme } from "./components/ui";
export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
