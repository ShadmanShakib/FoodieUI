import React from "react";
import { Box, Text, Image, Pressable, HStack, Flex } from "native-base";
import { SignInForm } from "../../components/forms";
import { Logo } from "../../assets/images";
import SignUpForm from "../../components/forms/SignUpForm";

export default function Authentication({ navigation }: any) {
  const [registerd, setRegisterd] = React.useState("Sign In");
  const handleSignInPress = () => setRegisterd("Sign In");
  const handleSignUpPress = () => {
    setRegisterd("Sign Up");
  };

  return (
    <Box h="100%" bg="white">
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="56"
      >
        <Image h={32} w={32} source={Logo} alt="Logo" />
      </Flex>
      <HStack>
        <Pressable onPress={() => handleSignInPress()}>
          <Text>Sign In</Text>
        </Pressable>
        <Pressable onPress={() => handleSignUpPress()}>
          <Text>Sign Up</Text>
        </Pressable>
      </HStack>

      {registerd === "Sign In" ? (
        <SignInForm onPress={() => navigation.navigate("Root")} />
      ) : (
        <SignUpForm />
      )}
    </Box>
  );
}
