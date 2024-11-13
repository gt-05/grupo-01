import BuyBox from '../components/BuyBox';

import ProductListing from '../components/ProductListing';

import Layout from '../components/Layout'

function ProductViewPage(props){
    return(
        <>

            <Layout>

                <BuyBox
                    name = "Tênis Nike Revolution 6 Next Nature Masculino"
                    reference = "Casual | Nike | REF:38416711"
                    stars = ""
                    rating = ""
                    price = "R$219,00"
                    priceDiscont = "R$219,00"
                    description = "Descrição do produto, descrição do produto, descrição do produto, descrição do produto">
                    
                
                </BuyBox>


                
            </Layout>
        

        </>

    )

}

export default ProductViewPage;