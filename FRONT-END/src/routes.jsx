import { Route } from "react-router-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

import ProductViewPage from "./pages/ProductViewPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"

export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ProductListing" element={<ProductListingPage/>}/>

        <Route path="/ProductViewPage" element={<ProductViewPage/>}/>

        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>

    </>

));
    
