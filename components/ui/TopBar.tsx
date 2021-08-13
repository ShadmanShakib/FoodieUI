import { Box, HStack, Text } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
interface ITopBar {
  onPress: () => void;
}
export default function TopBar(props: ITopBar) {
  return (
    <Box h="10">
      <HStack direction="row" justifyContent="space-around">
        <Feather onPress={props.onPress} name="menu" size={6} color="black" />
        <Ionicons name="notifications" size={20} color="black" />
      </HStack>
    </Box>
  );
}
