import React from "react";
import { FiCalendar } from "react-icons/fi";
import {IconButton,Flex,
Text,Heading} from '@chakra-ui/react'
function TransactionRow() {
  return (
    <Flex my={8} justifyContent="space-between" alignItems="center">
      <Flex alignItems="baseline">
        <Heading>Transactions</Heading>
        <Text color="gray.500" ml={6} verticalAlign="text-bottom">
          Apr 2021
        </Text>
      </Flex>
      <IconButton variant="solid" colorScheme="orange" icon={<FiCalendar />} />
    </Flex>
  );
}

export default TransactionRow;
