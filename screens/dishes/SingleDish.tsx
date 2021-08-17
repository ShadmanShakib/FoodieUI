import React from "react";
import { Box, Flex, Text, Image } from "native-base";
import { Food1 } from "../../assets/images";
import { PrimaryButton } from "../../components/ui";

export default function SingleDish({ navigation }: any) {
  return (
    <Box h="100%">
      <Flex mb="4" direction="row" justifyContent="center" py="2">
        <Image
          height="48"
          w="48"
          rounded="full"
          source={Food1}
          alt="Vaggie Tomato Mix"
        />
      </Flex>
      <Box h="60%" px="6" roundedTop={20} pt="4" bg="white">
        <Text mb="3" fontWeight="bold" fontSize="xl">
          Vaggie Tomato Mix
        </Text>
        <Text fontWeight="bold" fontSize="2xl" color="primary.100" mb="6">
          $9.99
        </Text>
        <Text>
          The best vaggie tomato mix in the world. It's made with original
          organic vaggitable and tomato. All ingredient are hand picked by our
          works.
        </Text>
      </Box>
      <Box pos="absolute" w="100%" px="4" bottom="2">
        <PrimaryButton title="ORDER" />
      </Box>
    </Box>
  );
}
