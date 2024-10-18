
import Gallery from "./Gallery"
import CardSale from "./cardssale"
import Section from "./Section"
import ProductListing from "./ProductListing"
import Footer from "./footer"


export default function Layout (props){
    return (
        <>
        <Gallery />
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