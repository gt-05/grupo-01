import Footer from "./components/footer"
// import ProductListing from "./components/ProductListing"
import Section from "./components/Section"

function App() {
  
  return (
    <>
      <Section 
      title="Produtos em alta" textAligh="center"
      link = {
        {
          "text": "Ver todos",
          "href": "https://redirect.link"
        }
      }>
  
        {/* <ProductListing/> */}
      </Section>
        
      
      <Footer/>
    </>
  )
}

export default App
