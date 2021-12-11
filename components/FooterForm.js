import React from 'react'
import {Flex,Input,InputGroup,InputLeftElement,Text,Button} from '@chakra-ui/react'
import {FiCreditCard,FiDollarSign} from 'react-icons/fi'
function FooterForm() {
    return (
        <Flex flexDirection="column">
            <Text color="gray.500" fontSize="md">Card Number</Text>
            <form>
                <InputGroup my={5}>
                    <InputLeftElement pointerEvents="none" children={<FiCreditCard color="#000" />} />
                    <Input placeholder="xxxx xxxx xxxx xxxx"/>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FiDollarSign color="#000" />} />
                    <Input placeholder="130.00"/>
                </InputGroup>
                <Button bg='#000' display="block" width="100%" color="#fff" _hover={{bg:"rgba(0,0,0,0.6)"}} my={4}>Send Money</Button>
            </form>
        </Flex>
    )
}

export default FooterForm
