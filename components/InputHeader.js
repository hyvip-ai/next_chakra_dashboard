import React from "react";
import { Input, InputGroup, InputLeftElement, Flex, IconButton } from "@chakra-ui/react";
import {FiSearch} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
function InputHeader() {
  return (
    <Flex justifyContent="space-evenly" width="100%">
        <InputGroup variant="outline" w="70%">
      <InputLeftElement
        pointerEvents="none"
        children={<FiSearch color="gray.300" />}
      />
      <Input borderRadius={10} bg="#fff" placeholder="Search Something......."/>
    </InputGroup>
    <IconButton borderRadius="50%" bg="white" color="#000">
      <FiBell/>
    </IconButton>
    </Flex>
  );
}

export default InputHeader;
