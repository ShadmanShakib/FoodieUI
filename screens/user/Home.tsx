import React from "react";
import {
  Box,
  Text,
  Input,
  HamburgerIcon,
  HStack,
  Center,
  ScrollView,
  Spacer,
} from "native-base";
import { HomeFood } from "../../assets/images";
import { Dishes } from "../../components/cards";

interface ITabMenu {
  name: string;
  active: boolean;
}
const TabMenu = (props: ITabMenu) => {
  return (
    <Box mr={3}>
      <Text
        mb={1}
        fontSize="lg"
        color={props.active ? "primary.100" : "gray.600"}
        px={2}
      >
        {props.name}
      </Text>

      <Box h="3px" bg={props.active ? "primary.100" : ""}></Box>
    </Box>
  );
};
export default function Home() {
  return (
    <Box pt={10} pl={8}>
      <HamburgerIcon h={5} mb={6} />

      <Text fontSize="2xl" w={40} mb={6} fontWeight="bold">
        Delicious Food for you
      </Text>

      <Input bg="white" mr="3" placeholder="Search" />
      <Box my={6}>
        <HStack>
          <TabMenu name="Foods" active={true} />
          <TabMenu name="Drinks" active={false} />
          <TabMenu name="Snacks" active={false} />
        </HStack>
      </Box>
      <ScrollView py={2} horizontal={true}>
        <Dishes name="Vaggie Tomato mix" source={HomeFood} price={9.99} />
        <Spacer w={4} />
        <Dishes name="Vaggie Tomato mix" source={HomeFood} price={9.99} />
        <Spacer w={4} />
        <Dishes name="Vaggie Tomato mix" source={HomeFood} price={9.99} />
        <Spacer w={4} />
        <Dishes name="Vaggie Tomato mix" source={HomeFood} price={9.99} />
      </ScrollView>
    </Box>
  );
}
