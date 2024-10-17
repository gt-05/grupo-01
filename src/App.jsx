
import {
  RouterProvider
} from "react-router-dom";
import routes from "./routes";

import CardSale from "./components/cardssale"
import Footer from "./components/footer"
import Section from "./components/Section"
import ProductListing from "./components/ProductListing"

import Layout from "./components/Layout"
import CardSale from "./components/cardssale"

function App() {
    
    
  return (

    <>

      <Layout/>
      <RouterProvider router = {routes}/>
      
      <CardSale />
      <Section 
      title="Produtos em alta" textAligh="center"
      link = {
        {
          "text": "Ver todos",
          "href": "https://redirect.link"
        }
      }>
        
       <ProductListing/>
          
      </Section>
      
      
      <Footer/>

    </>
  )
}

export default App;
