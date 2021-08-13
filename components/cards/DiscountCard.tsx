import React from "react";
import { Text, Box, Button, Image, HStack, Center } from "native-base";
import { Food2 } from "../../assets/images";
interface Props {
  normalPrice: string;
  discountedPrice: string;
  title: string;
}

export default function DiscountCard(props: Props) {
  return (
    <Box mx="6" pl="3" bg="white" rounded="lg" shadow={6} h="32">
      <HStack direction="row" h="32" alignItems="center">
        <Image
          rounded="full"
          mr="3"
          h="24"
          w="24"
          source={Food2}
          alt="Food Item"
        />
        <Box>
          <Text mb="2" fontWeight="semibold" fontSize="lg">
            {props.title}
          </Text>
          <HStack mb="2" direction="row" justifyContent="center">
            <Text strikeThrough={true}>${props.normalPrice}</Text>
            <Text
              ml="2"
              color="primary.100"
              fontWeight="semibold"
              fontSize="xl"
            >
              ${props.discountedPrice}
            </Text>
          </HStack>

          <Center>
            <Button rounded="md" size="sm" bgColor="primary.100">
              ORDER
            </Button>
          </Center>
        </Box>
      </HStack>
    </Box>
  );
}
