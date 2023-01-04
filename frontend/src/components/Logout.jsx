import {
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { RiLuggageCartLine, RiCoupon3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutFromAccount } from "../Redux/auth/action";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.user.firstName);

  const handleLogoutBtn = () => {
    dispatch(logoutFromAccount(toast));
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          bg={"#000"}
          rightIcon={<BsFillCaretDownFill />}
        >
          {user}
        </MenuButton>
        <MenuList bg={"#000"}>
          <Flex
            flexDirection={"column"}
            bg={"#000"}
            gap={"5px"}
            fontSize={"17px"}
          >
            <MenuItem
              bg={"#000"}
              onClick={() => {
                navigate("/wishlist");
              }}
              icon={<FaRegHeart />}
            >
              Wishlist
            </MenuItem>
            <MenuItem
              bg={"#000"}
              onClick={() => {
                navigate("/checkout");
              }}
              icon={<RiLuggageCartLine />}
            >
              Orders
            </MenuItem>

            <MenuItem
              bg={"#000"}
              onClick={() => {
                navigate("/cart");
              }}
              icon={<BsCart2 />}
            >
              Cart
            </MenuItem>
            <Divider />
            <MenuItem bg={"#000"} onClick={handleLogoutBtn} icon={<FiLogOut />}>
              Logout
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
};
