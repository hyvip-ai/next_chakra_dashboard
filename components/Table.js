import React from 'react'
import {Table, Thead, Th , Td , Flex, Avatar ,Tbody,Tr,Text } from "@chakra-ui/react"
function TableComponent() {
    return (
        <Table textAlign="center">
        <Thead>
          <Th>Name Of Transaction</Th>
          <Th>Category</Th>
          <Th>Cashback</Th>
          <Th>Amount</Th>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignContent="center" justifyContent="space-evenly">
                <Avatar
                  name="Amazon"
                  backgroundColor="gray.900"
                  color="yellow.400"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column">
                  <Text>Amazon</Text>
                  <Text>Apr 24, 2021 at 1:40pm</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>Electronics Devices</Td>
            <Td>+$2</Td>
            <Td>-$242.00</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignContent="center" justifyContent="space-evenly">
                <Avatar
                  name="Starbucks"
                  backgroundColor="gray.500"
                  color="green.900"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column">
                  <Text>Starbucks</Text>
                  <Text>Apr 24, 2021 at 1:40pm</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>cafe and Resturants</Td>
            <Td>+$2</Td>
            <Td>-$242.00</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignContent="center" justifyContent="space-evenly">
                <Avatar
                  name="Youtube"
                  backgroundColor="red.500"
                  color="#fff"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column">
                  <Text>Youtube</Text>
                  <Text>Apr 24, 2021 at 1:40pm</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>Social Media</Td>
            <Td>+$2</Td>
            <Td>-$242.00</Td>
          </Tr>
        </Tbody>
      </Table>
    )
}

export default TableComponent
