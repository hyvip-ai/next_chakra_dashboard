import { Link, Icon,Text } from "@chakra-ui/react";
import React from "react";

function NavLink(props) {
  return (
    <React.Fragment>
      <Link mr={2}>
        <Icon as={props.icon} fontSize="2xl" />
      </Link>
      <Link _hover={{ textDecor: "none" }}>
        <Text>{props.text}</Text>
      </Link>
    </React.Fragment>
  );
}

export default NavLink;
