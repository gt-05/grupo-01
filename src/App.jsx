import CardSale from "./components/cardssale"
import Footer from "./components/footer"
import Section from "./components/Section"
import ProductCard from "./components/ProductCard"
import ProductListing from "./components/ProductListing"

function App() {

  return (
    <>
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
