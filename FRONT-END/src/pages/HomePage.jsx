import Gallery from "../components/Gallery"
import Layout from "../components/Layout"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import CardSale from "../components/cardssale"
import ProductOffer from "../components/ProductOffer"



function App () {
    return(
        <>
        <Layout>
            <Gallery
                showThumbs= ""
                images= {
                    [
                    {"src": "../src/assets/sapato-nike.png"},
                    {"src": "../src/assets/sapato-nike.png"},
                    {"src": "../src/assets/sapato-nike.png"}
                    
                    

                ]
                }
                width= "1350px"
                height= ""
                radius= ""
                display= ""
                mlimage= "700px"
                mtimage="150px"
                mtslide= ""
                rotate='origin-bottom -rotate-[19.34deg] hover:rotate-[25deg] duration-500'
                bgimagem= ""
                displayThumbs= "hidden"
                mlproductsslide= ""
                mtproductsslide= ""
                hslide= ""
                wslide= ""

                
            />
            <CardSale/>
            <Section 
            title="Produtos em alta" textAlign="center"
            link = {
                {
                    "text": "Ver todos",
                    "href": "http://localhost:5173/ProductListing"
                }
            }>

            <ProductListing/>
            </Section>
            <ProductOffer/>
        </Layout>
        </>
    )
}
export default App