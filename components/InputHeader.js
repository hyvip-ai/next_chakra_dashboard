import React from "react";
import { Input, InputGroup, InputLeftElement, Flex, IconButton } from "@chakra-ui/react";
import {FiSearch} from 'react-icons/fi'
import {FiBell} from 'react-icons/fi'
function InputHeader() {
  return (
    <Flex justifyContent="space-between" width="100%">
        <InputGroup variant="outline" w="80%">
      <InputLeftElement
        pointerEvents="none"
        children={<FiSearch color="gray.300" />}
      />
      <Input borderRadius={10} bg="#fff" placeholder="Search Something......."/>
    </InputGroup>
    <IconButton borderRadius="50%" bg="white" color="#000">
      <FiBell/>
    </IconButton>
    <Flex
    h={30} w={30} color="#fff" bg="#b57295" alignItems="center" justifyContent="center" borderRadius="50%" ml="-8" mt="-3" zIndex="100">
      2
    </Flex>
    </Flex>
  );
}

export default InputHeader;
