import { Link, Icon,Text } from "@chakra-ui/react";
import React from "react";

function NavLink(props) {
  return (
    <React.Fragment>
      <Link mr={2} display={['none','none','block','block']}>
        <Icon as={props.icon} fontSize="2xl" />
      </Link>
      <Link _hover={{ textDecor: "none" }} display={['block','block','none','block']}>
        <Text>{props.text}</Text>
      </Link>
    </React.Fragment>
  );
}

export default NavLink;
