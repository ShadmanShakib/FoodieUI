import React from "react";
import { Box, Input, Text } from "native-base";
import { PrimaryButton } from "../../components/ui";

export default function Authentication({ navigation }: any) {
  return (
    <Box>
      <Text>Email:</Text>
      <Input />
      <Text>Password:</Text>
      <Input />
      <PrimaryButton
        title="SIGN IN"
        onPress={() => navigation.navigate("Root")}
      />
    </Box>
  );
}
