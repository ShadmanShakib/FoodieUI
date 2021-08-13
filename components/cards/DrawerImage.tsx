import React from "react";
import { Box, Text, Image, Flex } from "native-base";
import { ProfilePic } from "../../assets/images";

export default function CustomDrawerContent(props: any) {
  return (
    <Box pt="10" pb="5">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          alt="Shadman Shakib"
          rounded="full"
          h="24"
          w="24"
          source={ProfilePic}
        />
        <Text mt="4" fontWeight="semibold">
          Shadman Shakib
        </Text>
      </Flex>
    </Box>
  );
}
