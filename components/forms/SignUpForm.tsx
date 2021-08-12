import React from "react";
import { Box, Text, Input } from "native-base";
import { PrimaryButton } from "../ui";

export default function SignUpForm() {
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
        type="password"
        variant="unstyled"
        borderRadius="0"
        borderBottomWidth="2px"
        borderBottomColor="black"
        _focus={{ borderBottomColor: "primary.100" }}
      />
    </Box>
  );
}
