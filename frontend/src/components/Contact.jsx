import React from "react";
import { IoMdContact } from "react-icons/io";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Box>
      <Menu>
        <MenuButton colorScheme="transparent" as={Button}>
          <Image w={["", "80%", "40%"]} borderRadius="50%" src={""} alt="" />
        </MenuButton>
        <MenuList bgColor="#000">
          <MenuItem _hover={{ backgroundColor: "#000" }}>Hi, {""}</MenuItem>
          <MenuItem _hover={{ backgroundColor: "#000" }}>{""}</MenuItem>
          <MenuItem _hover={{ backgroundColor: "#000" }}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
