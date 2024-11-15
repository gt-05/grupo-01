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
            <Gallery/>
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