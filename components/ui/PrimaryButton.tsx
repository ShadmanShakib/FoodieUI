import React from "react";

import { Button } from "native-base";

interface IPrimaryButton {
  title: string;
  onPress?: () => void;
}

export default function PrimaryButton(props: IPrimaryButton) {
  const { title, onPress } = props;
  return (
    <Button
      onPress={onPress}
      bg="primary.100"
      _pressed={{ bg: "primary.100" }}
      _text={{ color: "white" }}
    >
      {title}
    </Button>
  );
}
