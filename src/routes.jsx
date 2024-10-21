import { Route } from "react-router-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<HomePage/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ProductListing" element={<ProductListingPage/>}/>
    </>

));
    
