import React from "react";
import { Topbar } from "../../components/ui";
import { Box, Text } from "native-base";

export default function Order({ navigation }: any) {
  return (
    <Box>
      <Topbar onPress={() => navigation.openDrawer()} />
      <Text>Order</Text>
    </Box>
  );
}
