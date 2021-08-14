import React from "react";
import { Topbar } from "../../components/ui";
import { Box, Text } from "native-base";

export default function Order({ navigation }: any) {
  return (
    <Box minH="100%">
      <Box>
        <Topbar title="ORDERS" onPress={() => navigation.openDrawer()} />
      </Box>
    </Box>
  );
}
