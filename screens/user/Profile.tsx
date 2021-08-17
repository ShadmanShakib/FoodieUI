import React from "react";
import { Box, Text, Image, Flex, Pressable, Spacer, HStack } from "native-base";
import { ProfilePic } from "../../assets/images";
import { PrimaryButton } from "../../components/ui";

import { AntDesign } from "@expo/vector-icons";
interface ICustomButton {
  title: string;
}
const CustomButton = ({ title }: ICustomButton) => {
  return (
    <Pressable py="3" mb={4} px="5" bg="white" rounded="xl">
      <Flex direction="row" justify="space-between">
        <Text fontWeight="semibold">{title}</Text>
        <AntDesign name="right" />
      </Flex>
    </Pressable>
  );
};

export default function Profile() {
  return (
    <Box pt={10} mx={6} h="100%">
      <Text mb={6} fontWeight="semibold" fontSize="xl">
        My Profile
      </Text>
      <HStack justifyContent="space-between">
        <Text>Personal Details</Text>
        <Text color="primary.100">Change</Text>
      </HStack>
      <Box bg="white" mb={6} p="2" rounded="xl">
        <HStack>
          <Image
            rounded="sm"
            h={20}
            w={20}
            source={ProfilePic}
            alt="Profile Pic"
          />
          <Flex ml="3" justify="center">
            <Text>Shadman Shakib</Text>
            <Text>sm.shakib@gmail.com</Text>
            <Text>Dhaka,Bangladesh</Text>
          </Flex>
        </HStack>
      </Box>
      <CustomButton title="Orders" />

      <CustomButton title="Pending reviews" />
      <CustomButton title="Faq" />
      <CustomButton title="Help" />
      <Box pos="absolute" bottom={2} w="100%">
        <PrimaryButton title="Update" />
      </Box>
    </Box>
  );
}
