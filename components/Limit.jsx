import React from 'react'
import { Flex,Text } from "@chakra-ui/react";
function Limit() {
    return (
        <>
        <Flex my={4} justifyContent="space-between">
            Balance <Text fontWeight="bold">$140.42</Text>
        </Flex>

        <Flex justifyContent="space-between">
            Credit Limit <Text fontWeight="bold">$150.00</Text>
        </Flex>
        </>
    )
}

export default Limit
