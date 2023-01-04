import React, { useContext, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";

import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Cart } from "./Cart";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { Auth } from "./Auth";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();

  const token = useSelector((state) => state.authReducer.token);

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
            bg="#000"
          >
            {!token ? <Auth /> : <Logout />}
          </Center>
        </Flex>
      </Flex>
    </>
  );
};
