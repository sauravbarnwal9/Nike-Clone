import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Tag, Text } from "@chakra-ui/react";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { CartContextProvider } from "../context/Cart";
import { WishlistContextProvider } from "../context/Wishlist";

export const Cards = ({ hello, el, reCart }) => {
  const navigate = useNavigate();
  const { addCart, removeCart } = useContext(CartContextProvider);
  const { addWish, removeWish } = useContext(WishlistContextProvider);

  return (
    <Flex
      direction={hello ? "row" : "column"}
      textAlign={hello ? "" : "center"}
      justifyContent={hello ? "space-between" : "center"}
      align="center"
      borderRadius="10px"
      bg={"#121212"}
      color="#B3B3B3"
      boxShadow="36px 37px 84px -22px rgba(207,217,26,0.45)"
      _hover={{ transform: "scale(1.09)" }}
      transition=".9s"
      p="2"
    >
      <Box w="90%">
        <Text fontSize="large" fontWeight="bold">
          {el.title}
        </Text>
        <Text>{el.text}</Text>
        <Flex justify={hello ? "" : "center"} gap="5" my="3">
          <Tag bg={"#B3B3B3"}>₹ {el.price}</Tag>
          <Flex align="center" gap=".1" color="yellow">
            <Text>{el.rating}</Text>
            <AiFillStar />
          </Flex>
        </Flex>
        <Flex justify={hello ? "" : "center"} gap="5px" my="2">
          <Button
            onClick={() => addCart(el)}
            variant={"#B3B3B3"}
            fontSize="lg"
            bgColor={"#B3B3B3"}
            color={"#000"}
            size="sm"
          >
            <HiOutlineShoppingBag />
          </Button>
          {reCart === "yes" ? (
            <Button
              onClick={() => removeWish(el._id)}
              variant={"B3B3B3"}
              fontSize="lg"
              bgColor={"#B3B3B3"}
              color={"#000"}
              size="sm"
            >
              <ImBin />
            </Button>
          ) : (
            <Button
              onClick={() => addWish(el)}
              variant={"#B3B3B3"}
              fontSize="lg"
              bgColor={"#B3B3B3"}
              color={"#000"}
              size="sm"
            >
              <AiOutlineHeart />
            </Button>
          )}
        </Flex>
      </Box>

      <Box w="100%" mt={hello ? "" : "-3"}>
        <Image
          w="100%"
          transform={hello ? "rotate(-35deg)" : ""}
          _hover={{ transform: "rotate(-20deg)" }}
          transition=".5s"
          cursor="pointer"
          src={el.images}
          alt="image"
          onClick={() => navigate(`/product/${el._id}`)}
        />
      </Box>
    </Flex>
  );
};
