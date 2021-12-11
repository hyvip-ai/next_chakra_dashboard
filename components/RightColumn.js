import React from 'react'
import {Flex,Heading} from '@chakra-ui/react'
import InputHeader from './InputHeader'
import FooterForm from './FooterForm'
import People from './People'
import Limit from './Limit'
import CreditCard from './CreditCard'
function RightColumn() {
    return (
        <Flex
          width={[
            "100%",
            "100%",
            "30%",
            "30%"
          ]}
          p="3%"
          backgroundColor="#f5f5f5"
          minHeight="100vh"
          overflow="auto"
          flexDirection="column"
        >
            <InputHeader />
            <Heading my={4}>My Cards</Heading>
            <CreditCard />
            <Limit />
            
            <People />
            <FooterForm/>
        </Flex>
    )
}

export default RightColumn
