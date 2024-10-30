import FilterBy from '../components/FilterBy'
import Header from '../components/hearder-comp/Header'
import ProductListing from '../components/ProductListing'
import Footer from '../components/Footer'
import Section from '../components/Section'
import { useState } from 'react'
import Layout from '../components/Layout'


function ProductListingPage(){

    const [SelectedOption, setSelectedOption] = useState('');

    return(
        <>
            <Layout>
                
                <Section>
                <div className="border-current h-11 w-[320px] flex relative left-[70%] top-[20px] bg-white rounded border drop-shadow-[6px_16px_30px_#6962620D]">
                    <span className="font-bold p-2 ml-2.5 tracking-wide"> Ordenar por: </span>
                <select className="absolute end-5 p-2 items-center tracking-wide" value={SelectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
                    <option value= "" disabled>Selecione a ordem</option>
                    <option value= "menor">Menor preço</option>
                    <option value= "maior">Maior preço</option>
                </select>
                </div>
                </Section>
                <div className='flex m-auto mt-10'>
                <FilterBy/>
                <ProductListing />
                </div>
            
            </Layout>
        
        </>
    )
}
export default ProductListingPage;