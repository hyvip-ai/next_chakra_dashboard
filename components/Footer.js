import { Avatar,Flex,Heading } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      h="20%"
      my={10}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        mb={5}
        name="Rajat Mondal"
        size="xl"
        src="https://avatars.githubusercontent.com/u/74717766?v=4"
      ></Avatar>
      <Heading fontSize="xl">Rajat Mondal</Heading>
    </Flex>
  );
}

export default Footer;
