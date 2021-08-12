import React from "react";
import { Box, Text, Image, Pressable, HStack, Flex } from "native-base";
import { SignInForm } from "../../components/forms";
import { Logo } from "../../assets/images";
import SignUpForm from "../../components/forms/SignUpForm";
import { PrimaryButton } from "../../components/ui";

export default function Authentication({ navigation }: any) {
  const [registerd, setRegisterd] = React.useState(true);
  const handleSignInPress = () => setRegisterd(true);
  const handleSignUpPress = () => {
    setRegisterd(false);
  };

  return (
    <Box h="100%">
      <Box w="100%" bg="white" shadow={20} borderBottomRadius={20}>
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
      <Box position="absolute" px="6" w="100%" bottom="48">
        {registerd ? <SignInForm /> : <SignUpForm />}
      </Box>

      <Box pos="absolute" px="6" w="100%" bottom="2">
        <PrimaryButton
          onPress={() => navigation.navigate("Root")}
          title={registerd ? "SIGN IN" : "SIGN UP"}
        />
      </Box>
    </Box>
  );
}
