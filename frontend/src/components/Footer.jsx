import React from "react";
import { Box, Icon, SimpleGrid, Text,Center } from "@chakra-ui/react";
import { BsHeartFill } from "react-icons/bs";

export const Footer = ({ mt }) => {
  return (
    <>
    <Box color="#B3B3B3" bg={"black"} mt={mt ? mt : ""} py="10">
    <Center h={'80px'}>
                <Text className="typeWritertheme">Made with <Icon as={BsHeartFill} /> by Saurav Barnwal</Text>
            </Center>
      <SimpleGrid
        textAlign="left"
        w={["90%", "80%", "50%"]}
        m="auto"
        mb="8"
        align="center"
        columns={3}
        spacing={10}
      >
        <Box>
          <Text fontWeight="bold">ABOUT NIKE</Text>
          <Box className="footerText">
            <Text>News</Text>
            <Text>Careers</Text>
            <Text>Investos</Text>
            <Text>Prupose</Text>
            <Text>Sustainability</Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="bold">Get Help</Text>
          <Box>
            <Text>Order Status</Text>
            <Text>Shipping & Delivery</Text>
            <Text>Payment Options</Text>
            <Text>Gift Card Balance</Text>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>Blog</Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="bold">Company</Text>
          <Box>
            <Text>Gift Cards</Text>
            <Text>Promotions</Text>
            <Text>Find A Store</Text>
            <Text>Signup</Text>
            <Text>Nike Jouneral</Text>
            <Text>Send Us Feeback</Text>
          </Box>
        </Box>
      </SimpleGrid>
      
    </Box>
        </>
  );
};
