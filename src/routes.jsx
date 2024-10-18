
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";

export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/products" element={<ProductListingPage/>}/>
    </>

));

