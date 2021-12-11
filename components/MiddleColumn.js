import React from "react";
import Chart from "../components/Chart";
import TableComponent from "./Table";
import { Flex, Heading, Text, Table, IconButton } from "@chakra-ui/react";
import MiddleHeader from "./MiddleHeader";
import TransactionRow from "./TransactionRow";
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
        <MiddleHeader />
        <Chart />
        <TransactionRow />

        <Flex>
          <TableComponent />
        </Flex>
      </Flex>
    </>
  );
}
