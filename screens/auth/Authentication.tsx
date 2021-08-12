import React from "react";
import { Box, Text, Image, Pressable, HStack, Flex } from "native-base";
import { SignInForm } from "../../components/forms";
import { Logo } from "../../assets/images";
import SignUpForm from "../../components/forms/SignUpForm";

export default function Authentication({ navigation }: any) {
  const [registerd, setRegisterd] = React.useState(true);
  const handleSignInPress = () => setRegisterd(true);
  const handleSignUpPress = () => {
    setRegisterd(false);
  };

  return (
    <Box h="100%">
      <Box bg="white" shadow={20} borderBottomRadius={20}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="56"
        >
          <Image h={32} w={32} source={Logo} alt="Logo" />
        </Flex>
        <HStack px="3" direction="row" justifyContent="space-around">
          <Pressable onPress={() => handleSignInPress()}>
            <Text px={5} py={3} fontWeight="semibold">
              Sign In
            </Text>
            <Box h="3px" bg={registerd ? "primary.100" : "white"} />
          </Pressable>
          <Pressable onPress={() => handleSignUpPress()}>
            <Text px={5} py={3} fontWeight="semibold">
              Sign Up
            </Text>
            <Box h="3px" bg={registerd ? "white" : "primary.100"} />
          </Pressable>
        </HStack>
      </Box>

      {/* Forms */}
      <Box mt="10" px="6">
        {registerd ? (
          <SignInForm onPress={() => navigation.navigate("Root")} />
        ) : (
          <SignUpForm />
        )}
      </Box>
    </Box>
  );
}
