import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import Layout from '../components/Layout'
import Gallery from '../components/Gallery';

function ProductViewPage(props){
    return(
        <>

            <Layout>

             
                <BuyBox
                    name = "Tênis Nike Revolution 6 Next Nature Masculino"
                    reference = "Casual | Nike | REF:38416711"
                    stars = ""
                    rating = "90 Avaliações"
                    price = "R$219,00"
                    priceDiscont = "R$219,00"
                    description = "Descrição do produto, descrição do produto, descrição do produto, descrição do produto, Descrição do produto, descrição do produto, descrição do produto, descrição do produto, Descrição do produto, descrição do produto, descrição do produto, descrição do produto">
                    
                </BuyBox>
                <div className="mt-[850px]">
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
                    
                </div>
                

                
            </Layout>
        

        </>

    )

}

export default ProductViewPage;