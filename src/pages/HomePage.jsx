import Gallery from "../components/Gallery"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import CardSale from "../components/cardssale"
import Header from "../components/hearder-comp/Header"
import ProductOffer from "../components/ProductOffer"
function App () {
    return(
        <>
        <Layout>
            <Header/>
            <Gallery/>
            <CardSale/>
            <Section 
            title="Produtos em alta" textAlign="center"
            link = {
                {
                    "text": "Ver todos",
                    "href": "http://redirect.link"
                }
            }>
            <ProductListing/>
            </Section>
            <ProductOffer/>
            <Footer/>
        </Layout>
        </>
    )
}
export default App