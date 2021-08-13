import { Box, HStack, Text } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
interface ITopBar {
  onPress: () => void;
  title: string;
}
export default function TopBar(props: ITopBar) {
  return (
    <Box px="6" bg="white" h="12">
      <HStack
        direction="row"
        h="12"
        alignItems="center"
        justifyContent="space-between"
      >
        <Feather onPress={props.onPress} name="menu" size={24} color="black" />
        <Text fontWeight="semibold" color="primary.100">
          {props.title}
        </Text>
        <Ionicons name="notifications" size={24} color="black" />
      </HStack>
    </Box>
  );
}
