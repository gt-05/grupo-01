
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout'

function ProductPage(){
    return(
        <>

            <Layout>
                <Gallery/>
                
                <ProductListing/>

                
            </Layout>
        

        </>

    )

}

export default ProductPage;