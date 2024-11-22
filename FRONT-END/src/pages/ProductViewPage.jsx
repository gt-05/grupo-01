import Layout from '../components/Layout'
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';




function ProductViewPage(props){
    return(
        <>

            <Layout>
                
                <Gallery
                    showThumbs= ""
                    images = {
                        [
                        {"src": "../src/assets/sapato-nike.png"},
                        {"src": "../src/assets/sapato-nike-2.png"},
                        {"src": "../src/assets/sapato-nike-3.png"},
                        {"src": "../src/assets/sapato-nike-4.png"},
                        {"src": "../src/assets/sapato-nike-5.png"}
                        
                        ]
                    }
                    
                    width= "680px"
                    height= "600px"
                    radius= "4px"
                    display= "hidden"
                    mlimage= "80px"
                    mtimage= "80px"
                    mtslide= "100px"
                    bgimagem= "blue-200"
                    rotate= ""
                    displayThumbs= ""
                    mlproductslide= "55px"
                    mtproductslide= "55px"              
                    hslide= "20px"
                    wslide= "780px"
                    
                    himageslide= "300px"
                    
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
                        "href": "http://localhost:5173/ProductListing"
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