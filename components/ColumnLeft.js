import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { FiBox, FiDollarSign, FiHome, FiPieChart } from 'react-icons/fi'
import {useState} from 'react'
import NavLink from './NavLink'
import Footer from './Footer'
function ColumnLeft() {
    const [className, setClassName] = useState('home')
    return (
        <Flex
          w="15%"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#020202"
          color="#fff"
          h="100%"
        >
          <Flex flexDirection="column" justifyContent="space-between" h="100%">
            <Flex flexDirection="column" as="nav" h="80%">
              <Heading
                h="20%"
                my={10}
                fontSize="4xl"
                alignItems="center"
                letterSpacing="tight"
              >
                Rise.
              </Heading>
              <Flex
                h="80%"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="space-evenly"
              >
                <Flex _hover={{color:"red.400"}} color={className==='home'?"red.500":"#fff"} className="sidebar-items">
                  <NavLink icon={FiHome} text={'Home'}/>
                </Flex>

                <Flex _hover={{color:"red.400"}} onClick={()=>{setClassName('chart')}} color={className==='chart'?"red.500":"#fff"} className="sidebar-items">
                  <NavLink icon={FiPieChart} text="Credit"/>
                </Flex>

                <Flex _hover={{color:"red.400"}} onClick={()=>{setClassName('card')}} color={className==='card'?"red.500":"#fff"} className="sidebar-items">
                <NavLink icon={FiDollarSign} text="Wallet"/>
                  
                </Flex>

                <Flex _hover={{color:"red.400"}} onClick={()=>{setClassName('services')}} color={className==='services'?"red.500":"#fff"} className="sidebar-items">
                <NavLink icon={FiBox} text="Services"/>

                </Flex>
              </Flex>
            </Flex>
                <Footer/>
          </Flex>
        </Flex>
    )
}

export default ColumnLeft
