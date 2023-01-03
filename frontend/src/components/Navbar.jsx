import React, { useContext, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";

import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
// import { Cart } from "../Cart";
import { useNavigate } from "react-router-dom";
// import { CartContextProvider } from "../../context/Cart";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Contact } from "../Contact"
import axios from "axios";
import { Cart } from "./Cart";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { Auth } from "./Auth";

export const Navbar = () => {
  const navigate = useNavigate();
  //   const { loginWithRedirect, isAuthenticated } = useAuth0();
  //   const { cart } = useContext(CartContextProvider)
  let token = false;
  return (
    <>
      <Flex
        backdropFilter={"blur(10px)"}
        bg="black"
        position="sticky"
        top="0"
        zIndex="99"
        padding="15"
        color="#fff"
        align="center"
      >
        <Box>
          <Image
            w={["40%", "20%", "10%"]}
            onClick={() => navigate("/")}
            cursor="pointer"
            src="https://i.postimg.cc/Gt36kSBM/logo.png"
            alt="logo"
          />
        </Box>

        <Flex fontSize="30" align="center">
          <Box>
            <HiOutlineSearch />
          </Box>
          <Cart />
          <Button
            onClick={() => navigate("/wishlist")}
            fontSize="30"
            colorScheme="transparent"
          >
            <AiOutlineHeart />
          </Button>
          <Center
            h={"36px"}
            justifyContent={"right"}
            mr={"40px"}
            fontSize={"16px"}
            cursor={"pointer"}
          >
            {!token ? <Auth /> : <Logout />}
          </Center>
        </Flex>
      </Flex>
    </>
  );
};
