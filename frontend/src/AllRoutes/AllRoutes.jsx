import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "../components/Auth";
import {LoginForm} from "../components/LoginForm";
import {SignupForm} from "../components/SignupForm";
import { AuthPage } from "../pages/AuthPage";

import { Checkout } from "../pages/checkout/Checkout";
import { Home } from "../pages/home/Home";
import { PaymentSucces } from "../pages/PaymentSuccess";
import { Product } from "../pages/product/Product";
import { Wishlist } from "../pages/wishlist/Wishlist";
import { Private } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <Private>  <Checkout /></Private>
          }
        />
        <Route path='/wishlist' element={<Private><Wishlist/></Private>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/paymentsuccess" element={<Private><PaymentSucces /></Private>} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
