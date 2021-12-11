import { Flex,Button ,Stack} from '@chakra-ui/react'
import React from 'react'

function ColorChang({setGradient}) {
    return (
        <Stack direction="row" spacing={4} my={4} justifyContent="center">
            <Button onClick={()=>{setGradient("linear(to-t,#b57295,#26259A)")}} bg="gray.700" _hover={{bg:"gray.500"}}></Button>
            <Button onClick={()=>{setGradient("linear(to-t, yellow.300, blue.500)")}} bg="gray.700" _hover={{bg:"gray.500"}}></Button>
            <Button onClick={()=>{setGradient("linear(to-t, orange.300, pink.600)")}} bg="gray.700" _hover={{bg:"gray.500"}}></Button>
        </Stack>
    )
}

export default ColorChang
