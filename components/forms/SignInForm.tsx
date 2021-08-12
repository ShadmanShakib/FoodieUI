import React from "react";
import { Box, Input, Text } from "native-base";
import { PrimaryButton } from "../ui";

interface ISignInForm {
  onPress?: () => void;
}
export default function SignInForm({ onPress }: ISignInForm) {
  return (
    <Box>
      <Text>E-mail:</Text>
      <Input />
      <Text>Password:</Text>
      <Input />
      <PrimaryButton onPress={onPress} title="SIGN IN" />
    </Box>
  );
}
