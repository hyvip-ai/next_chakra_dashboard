import { Flex,Heading,Text,Avatar,IconButton,Table,Td,Tr,Th,Tbody,Thead } from "@chakra-ui/react";
import React from "react";
import ColumnLeft from "../components/ColumnLeft";
import { MiddleColumn } from '../components/MiddleColumn'

export default function Home() {
  return (
    <React.Fragment>
      <Flex h="100vh" flexDirection="row" overflow="hidden" maxWidth="2000px">
        {/* column 1 */}
        <ColumnLeft />
        {/* column 2  */}
        
        <MiddleColumn />
       
        {/* column 3 */}
        <Flex
          width="30%"
          p="3%"
          backgroundColor="gray.100"
          minHeight="100vh"
          overflow="auto"
        ></Flex>
      </Flex>
    </React.Fragment>
  );
}
