import React from "react";
import { Box, Input, Text } from "native-base";
import PrimaryButtion from "../../components/ui/PrimaryButton";

export default function Authentication({ navigation }: any) {
  return (
    <Box>
      <Text>Email:</Text>
      <Input />
      <Text>Password:</Text>
      <Input />
      <PrimaryButtion
        title="SIGN IN"
        onPress={() => navigation.navigate("Root")}
      />
    </Box>
  );
}
