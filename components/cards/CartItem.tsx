import { Box, Text, Image, HStack, Pressable } from "native-base";
import React from "react";
import { ImageSourcePropType } from "react-native";

interface ICartItem {
  name: string;
  img: ImageSourcePropType;
  price: number;
}

export default function Cart(props: ICartItem) {
  const { name, img, price } = props;
  const [count, setCount] = React.useState(1);
  return (
    <Box bg="white" rounded="xl" px="3" shadow={10}>
      <HStack h={32} alignItems="center">
        <Image rounded="full" h={20} w={20} source={img} alt={name} />
        <Box ml={4}>
          <Text py="4" fontWeight="semibold">
            {name}
          </Text>

          <Text mb="2" color="primary.100">
            ${price}
          </Text>
          {/* Adding or deleting item  */}
          <Box bg="primary.100" px="2" py="1" rounded={10}>
            <HStack justifyContent="center">
              <Pressable onPress={() => setCount(count + 1)}>
                <Text fontSize="xl" mr="4" color="white">
                  +
                </Text>
              </Pressable>

              <Text fontSize="xl" color="white">
                {count}
              </Text>
              <Pressable onPress={() => setCount(count - 1)}>
                <Text color="white" fontWeight="semibold" ml="4" fontSize="xl">
                  -
                </Text>
              </Pressable>
            </HStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
