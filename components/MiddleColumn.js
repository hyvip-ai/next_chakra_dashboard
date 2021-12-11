import React from "react";
import Chart from "../components/Chart";
import  {FiCalendar}  from "react-icons/fi";
import TableComponent from "./Table";
import {
  Flex,
  Heading,
  Text,
  Table,
  IconButton,

} from "@chakra-ui/react";
export function MiddleColumn() {
  return (
    <>
      <Flex
        width="55%"
        minH="100vh"
        overflow="auto"
        p="3%"
        flexDirection="column"
      >
        <Heading as="h1" fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome Back,
          <Flex fontWeight="bold" display="inline-flex">
            Rajat
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          $5750.20
        </Text>
        <Chart />

        <Flex my={8} justifyContent="space-between" alignItems="center">
          <Flex alignItems="baseline">
            <Heading>Transactions</Heading>
            <Text color="gray.500" ml={6} verticalAlign="text-bottom">
              Apr 2021
            </Text>
          </Flex>
          <IconButton
            variant="solid"
            colorScheme="orange"
            icon={<FiCalendar />}
          />
        </Flex>

        <Flex>
         <TableComponent />
        </Flex>
      </Flex>
    </>
  );
}
