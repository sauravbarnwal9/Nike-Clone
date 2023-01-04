import React from "react";

import Confetti from "react-confetti";
import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentSucces = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <Flex bgColor="blue.900" minH="100vh" justify="center" align="center">
      <Confetti />
      <Image
        src="https://i.postimg.cc/zvbbr9X7/payment.gif"
        alt="payment success"
      />
    </Flex>
  );
};
