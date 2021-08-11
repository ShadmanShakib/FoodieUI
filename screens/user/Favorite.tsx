import React from "react";
import { Box, Text, Image, HStack, Spacer } from "native-base";
import { Food1 } from "../../assets/images";
import { ScrollView } from "react-native";
import { PrimaryButton } from "../../components/ui";

interface IFavoriteCard {
  title: string;
  price: number;
}

const FavoriteCard = ({ title, price }: IFavoriteCard) => {
  return (
    <HStack rounded={10} px="4" bg="white" h={24} alignItems="center">
      <Image h={20} w={20} rounded="full" source={Food1} alt="FFK" />
      <Box ml="2">
        <Text fontWeight="semibold" mb={2}>
          {title}
        </Text>
        <Text color="primary.100">${price}</Text>
      </Box>
    </HStack>
  );
};

export default function Favorite() {
  return (
    <Box pt="10" h="100%" mx="6">
      <Box mb={6}>
        <Text fontWeight="semibold" fontSize="xl">
          Favorite
        </Text>
      </Box>
      <ScrollView>
        <FavoriteCard title="Vaggie Tomato mix" price={9.99} />
        <Spacer h={4} />
        <FavoriteCard title="Vaggie Tomato mix" price={9.99} />
        <Spacer h={4} />
        <FavoriteCard title="Vaggie Tomato mix" price={9.99} />
      </ScrollView>
      <Box mb={2}>
        <PrimaryButton title="Order" />
      </Box>
    </Box>
  );
}
