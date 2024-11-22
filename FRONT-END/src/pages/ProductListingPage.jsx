import FilterBy from '../components/FilterBy'
import ProductListing from '../components/ProductListing'
import Section from '../components/Section'
import { useState } from 'react'
import Layout from '../components/Layout'
import { useParams  } from 'react-router-dom'


function ProductListingPage(){

    const [SelectedOption, setSelectedOption] = useState('');

    let params = useParams();
    fetch(`http://localhost:3000/products`)  


    return(
        <>
            <Layout>
                
                <Section>
                <div className="border-current h-11 w-[320px] flex relative left-[870px] top-[20px] bg-white rounded border drop-shadow-[6px_16px_30px_#6962620D]">
                    <span className="font-bold p-2 ml-2 tracking-wide"> Ordenar por: </span>
                <select className="absolute end-5 p-2 items-center tracking-wide" value={SelectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                    <option value= "" disabled>Selecione a ordem</option>
                    <option value= "menor">Menor preço</option>
                    <option value= "maior">Maior preço</option>
                </select>
                </div>
                </Section>
                <div className='flex mt-10 gap-10'>
                <FilterBy/>
                <ProductListing />
                </div>
            
            </Layout>
        
        </>
    )
}
export default ProductListingPage;