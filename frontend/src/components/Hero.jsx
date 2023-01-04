import React from "react";

import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMailbox, BsMessenger } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

import { AspectRatio, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { HiMailOpen } from "react-icons/hi";

const social = [
  { logo: <FaGithub />, color: "#160597" ,link:'https://github.com/sauravbarnwal9'},
  { logo: <HiMailOpen />, color: "red",link:'mailto:sauravbarnwal9@gmail.com?subject=Hi' },
  { logo: <AiFillInstagram />, color: "pink" ,link:'https://www.instagram.com/100rav_barnwal/'},
  { logo: <FaLinkedin />, color: "#7960f4" ,link:'https://www.linkedin.com/in/saurav-barnwal-60806923a/'},
  { logo: <AiFillYoutube />, color: "red" ,link:'#'},
];

export const Hero = () => {
  return (
    <Box mb="" color="#FFFFFF">
      <Box textAlign="center">
        <Text
          fontSize={["40", "60"]}
          align="center"
          w={["90%", "90%", "60%"]}
          m="auto"
          fontWeight="bolder"
        >
          Play With Electric Nike Adapt 2.0 Sneakers
        </Text>
        <Button bg={"#B3B3B3"} color="#000000">
          Explore Product
        </Button>
      </Box>

      <Flex h={["250", "400", ""]} justify="center" w="90%" m="auto">
        <Flex gap={["0", "0", "5"]} direction="column">
          <Box h={["30%", "70%", ""]}>
            <video
              title=""
              src="https://static.nike.com/a/videos/q_90,vc_h265/01e782c6-133e-434c-8880-98d3bf63fc14/video.mp4"
              poster=""
              loop
              muted
              style={{
                height: "130px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => e.currentTarget.pause()}
            />
          </Box>
          <Box h={["30%", "70%", ""]}>
            <video
              title=""
              src="https://static.nike.com/a/videos/q_90/6235eac6-519f-4052-bf3a-b12d8093fc9e/video.mp4"
              style={{
                height: "120px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              loop
              muted
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => e.currentTarget.pause()}
            />
          </Box>
          <Box>
            <video
              title=""
              src="https://static.nike.com/a/videos/q_90/59d900c0-7339-46da-bdc3-3b3604cfcdfc/video.mp4"
              style={{
                height: "120px",
                borderRadius: "15px",
                cursor: "pointer",
              }}
              loop
              muted
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => e.currentTarget.pause()}
            />
          </Box>
        </Flex>

        <Box>
          <Image
            _hover={{ transform: "rotate(-15deg)", cursor: "pointer" }}
            transition=".5s"
            transform="rotate(-25deg)"
            w={["100%", "90%", "60%"]}
            m="auto"
            src="https://i.postimg.cc/6p6t9skT/hero.png"
            alt=""
          />
        </Box>

        <Flex fontSize="35" gap="5" direction="column">
          {social.map((el, i) => (
            <Box
              key={i}
              _hover={{ transform: "scale(1.09)", color: `${el.color}` }}
              transition=".5s"
              cursor="pointer"
             
            >
            <a   href={el.link}
            target="_blank">  {el.logo}</a>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
