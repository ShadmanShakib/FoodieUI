import React from "react";
import { Input } from "native-base";

export default function TextInput() {
  return (
    <Input
      px="0"
      placeholder="Email address"
      variant="unstyled"
      borderRadius="0"
      borderBottomWidth="2px"
      borderBottomColor="black"
      _focus={{ borderBottomColor: "primary.100" }}
    />
  );
}
