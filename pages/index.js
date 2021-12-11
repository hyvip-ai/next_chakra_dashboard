import { Flex } from "@chakra-ui/react";
import React from "react";
import ColumnLeft from "../components/ColumnLeft";
import { MiddleColumn } from '../components/MiddleColumn'
import RightColumn from "../components/RightColumn";

export default function Home() {
  return (
    <React.Fragment>
      <Flex h={['none','none',"100vh"]} flexDirection={["column","column","row","row"]} overflow={["auto","auto","hidden","hidden"]} maxWidth="2000px">
        {/* column 1 */}
        <ColumnLeft />
        {/* column 2  */}
        
        <MiddleColumn />
       
        {/* column 3 */}
        <RightColumn />
      </Flex>
    </React.Fragment>
  );
}
