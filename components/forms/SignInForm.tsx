import React from "react";
import { Box, Text, Input } from "native-base";
import { PrimaryButton } from "../ui";
import { TextInput } from "react-native";

interface ISignInForm {
  onPress?: () => void;
}
export default function SignInForm({ onPress }: ISignInForm) {
  return (
    <Box>
      <Input
        px="0"
        placeholder="Email address"
        variant="unstyled"
        borderRadius="0"
        borderBottomWidth="2px"
        borderBottomColor="black"
        _focus={{ borderBottomColor: "primary.100" }}
      />

      <Input
        mt="6"
        px="0"
        placeholder="Password"
        mb="32"
        type="password"
        variant="unstyled"
        borderRadius="0"
        borderBottomWidth="2px"
        borderBottomColor="black"
        _focus={{ borderBottomColor: "primary.100" }}
      />

      <PrimaryButton onPress={onPress} title="SIGN IN" />
    </Box>
  );
}
