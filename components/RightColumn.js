import React from 'react'
import {Flex} from '@chakra-ui/react'
import InputHeader from './InputHeader'
function RightColumn() {
    return (
        <Flex
          width="30%"
          p="3%"
          backgroundColor="gray.100"
          minHeight="100vh"
          overflow="auto"
        >
            <InputHeader />

        </Flex>
    )
}

export default RightColumn
