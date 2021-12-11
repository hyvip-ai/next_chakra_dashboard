import { Flex,Text,Heading } from '@chakra-ui/react'
import { FiCreditCard } from "react-icons/fi";
import React, { useState } from 'react'
import ColorChang from './ColorChang';

function CreditCard() {
    const [gradient, setGradient] = useState("linear(to-t,#b57295,#26259A)")
    return (
        <Flex flexDirection="column">
        <Flex color="#fff" p="15px" h="200px" w="100%" borderRadius="25px" bgGradient={gradient} flexDirection="column" justifyContent="space-between" >
            <Flex justifyContent="space-between">
                <Text w="80%">Current balance</Text>

                <Flex w="15%" justifyContent="space-between" alignItems="center">
                    <FiCreditCard/>
                    <Text>Rise.</Text>
                </Flex>
            </Flex>
            <Text fontWeight="bold" fontSize="2xl"> 
                $5750.20
            </Text>
            <Text fontWeight="bold" fontSize="md"> 
                **** &nbsp; **** &nbsp; **** &nbsp; 1289
            </Text>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Flex flexDirection="column">
                    <Text textTransform="uppercase">Valid Thru</Text>
                    <Text>12/23</Text>
                </Flex>
                <Flex flexDirection="column">
                    <Text>CVV</Text>
                    <Text>***</Text>
                </Flex>
                <Flex><FiCreditCard/></Flex>
            </Flex>
        </Flex>
        <ColorChang setGradient={setGradient}/>
        </Flex>
    )
}

export default CreditCard
