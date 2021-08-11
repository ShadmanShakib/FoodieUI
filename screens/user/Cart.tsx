import React from "react";
import { Box, Text } from "native-base";
import { Food1 } from "../../assets/images";
import { CartItem } from "../../components/cards";
import { PrimaryButton } from "../../components/ui";
export default function Cart() {
  return (
    <Box mx={6} pt={10} h="100%">
      <Text fontSize="xl" color="gray.800" fontWeight="semibold" mb={6}>
        Cart
      </Text>
      <Box>
        <CartItem price={9.99} name="Vaggie Tomato Mix" img={Food1} />
      </Box>
      <Box position="absolute" w="100%" bottom={2}>
        <PrimaryButton title="Checkout" />
      </Box>
    </Box>
  );
}
