import { Box, Text, Image, Center } from "native-base";
import React from "react";
import { ImageSourcePropType } from "react-native";
interface IFoodCard {
  name: string;
  source: ImageSourcePropType;
  price?: number;
}
export default function Dishes(props: IFoodCard) {
  const { name, source, price } = props;
  return (
    <Box py={5} px={5} width={40} rounded={20} shadow={10} bg="white">
      <Center>
        <Image mb={4} height={32} w={32} source={source} alt={name} />
        <Text
          textAlign="center"
          w={40}
          fontWeight="semibold"
          mb={4}
          fontSize="lg"
        >
          {name}
        </Text>
        <Text fontWeight="semibold" fontSize="xl" color="primary.100">
          ${price}
        </Text>
      </Center>
    </Box>
  );
}
