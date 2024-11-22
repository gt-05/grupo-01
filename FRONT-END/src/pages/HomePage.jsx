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
                    {"src": "../src/assets/sapato-nike-2.png"},
                    {"src": "../src/assets/sapato-nike-3.png"},
                    {"src": "../src/assets/sapato-nike-4.png"},
                    {"src": "../src/assets/sapato-nike-5.png"}
                    
                    
                    

                ]
                }
                width= "1350px"
                height= ""
                radius= ""
                display= ""
                mlimage= "650px"
                mtimage="150px"
                mtslide= ""
                rotate='origin-bottom -rotate-[19.34deg] hover:rotate-[25deg] duration-500'
                bgimagem= ""
                displayThumbs= "hidden"
                mlproductsslide= ""
                mtproductsslide= ""
                hslide= ""
                wslide= ""
                wimageslide= "600px"
                himageslide= "300px"


                
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