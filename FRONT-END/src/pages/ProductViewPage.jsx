import Layout from '../components/Layout'
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';
import GalleryProductView from '../components/GalleryProductView';



function ProductViewPage(props){
    return(
        <>

            <Layout>
                
                <Gallery
                    showThumbs= ""
                    images = {
                        {
                        "src": "public/product-image-1.png",
                        "src": "public/product-image-2.png",
                        "src": "public/product-image-3.png",
                        "src": "public/product-image-4.png"

                        }
                    }
                    width= "700px"
                    height= "570px"
                    radius= "4px"
                                   
                    
                />
            
                <BuyBox
                    name = "Tênis Nike Revolution 6 Next Nature Masculino"
                    reference = "Casual | Nike | REF:38416711"
                    stars = "4"
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