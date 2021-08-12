import React from "react";
import { Box, Text, Input } from "native-base";
import { PrimaryButton } from "../ui";
interface ISignUpForm {
  onPress?: () => void;
}
export default function SignUpForm({ onPress }: ISignUpForm) {
  return (
    <Box>
      <Text>Name:</Text>
      <Input />
      <Text>E-mail:</Text>
      <Input />
      <PrimaryButton onPress={onPress} title="SIGN UP" />
    </Box>
  );
}
