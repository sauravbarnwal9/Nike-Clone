import React from "react";
import styles from "./Wishlist.module.css";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { WishlistContextProvider } from "../../context/Wishlist";
import { useContext } from "react";
import { ProductTable } from "../../components/ProductTable";

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContextProvider);

  return (
    <Box className={styles.wishlistContainer}>
      <Navbar />
      <Box minH="500px">
        {wishlist.length > 0 ? (
          <ProductTable
            {...{ hello: "", shoesData: wishlist, reCart: "yes" }}
          />
        ) : (
          <Center>
            {" "}
            <Image
              src="https://thumbnail.imgbin.com/15/3/4/imgbin-wish-list-santa-claus-drawing-gift-others-LM2SvuNXEpfDb2UeewYVxUp2y_t.jpg"
              alt="empty wishlist"
            />
          </Center>
        )}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
