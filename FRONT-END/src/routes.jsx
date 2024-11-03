import { Route } from "react-router-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductView from './pages/ProductView';

export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<HomePage/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/ProductListing" element={<ProductListingPage/>}/>
        <Route path='/p/:slug' element={<ProductView />}/>
    </>

));
    
