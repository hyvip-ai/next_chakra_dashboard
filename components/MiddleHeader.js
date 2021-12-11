import React from 'react'
import {Heading,Text,Flex,} from '@chakra-ui/react'
function MiddleHeader() {
    return (
        <>
        <Heading as="h1" fontWeight="normal" mb={4} letterSpacing="tight">
        Welcome Back,
        <Flex fontWeight="bold" display="inline-flex">
          Rajat
        </Flex>
      </Heading>
      <Text color="gray" fontSize="sm">
        My Balance :
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        $5750.20
      </Text>
      </>
    )
}

export default MiddleHeader
