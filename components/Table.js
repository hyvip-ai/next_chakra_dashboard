import React from "react";
import {
  Table,
  Thead,
  Th,
  Td,
  Flex,
  Avatar,
  Tbody,
  Tr,
  Text,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
function TableComponent() {
  const [display, setDisplay] = React.useState(true);
  return (
    <Flex flexDirection="column" w="100%">
      <Table textAlign="center">
        <Thead>
          <Tr>
            <Th>Name Of Transaction</Th>
            <Th>Category</Th>
            <Th>Cashback</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex
                alignContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  name="Amazon"
                  backgroundColor="gray.900"
                  color="yellow.400"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column" ml={5}>
                  <Text fontWeight="bold">Amazon</Text>
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
              <Flex
                alignContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  name="Starbucks"
                  backgroundColor="gray.500"
                  color="green.900"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column" ml={5}>
                  <Text fontWeight="bold">Starbucks</Text>
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
              <Flex
                alignContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  name="Youtube"
                  backgroundColor="red.500"
                  color="#fff"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column" ml={5}>
                  <Text fontWeight="bold">Youtube</Text>
                  <Text>Apr 24, 2021 at 1:40pm</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>Social Media</Td>
            <Td>+$2</Td>
            <Td>-$242.00</Td>
          </Tr>

          <Tr display={display ? "" : "none"}>
            <Td>
              <Flex
                alignContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  name="Lunch"
                  backgroundColor="orange.500"
                  color="#fff"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column" ml={5}>
                  <Text fontWeight="bold">Lunch</Text>
                  <Text>Apr 24, 2021 at 1:40pm</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>Social Media</Td>
            <Td>+$2</Td>
            <Td>-$242.00</Td>
          </Tr>

          <Tr display={display ? "" : "none"}>
            <Td>
              <Flex
                alignContent="center"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Avatar
                  name="Sweets"
                  backgroundColor="yellow.500"
                  color="#fff"
                  size="md"
                ></Avatar>
                <Flex flexDirection="column" ml={5}>
                  <Text fontWeight="bold">Sweets</Text>
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
      <Flex
        mt={4}
        w="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Divider position="absolute" />
        <IconButton
          onClick={() => {
            setDisplay((prev) => {
              return !prev;
            });
          }}
          icon={!display ? <FiChevronDown /> : <FiChevronUp />}
        ></IconButton>
      </Flex>
    </Flex>
  );
}

export default TableComponent;
