import ProductCard from "./ProductCard";

export default function ProductListing(){
    return(
      <>
        <section className="flex flex-col w-[450px] h-[500px] inline-block">
          <h3>Produtos em alta</h3>
          <a href="">Ver todos</a>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

        </section>
       
        
      </>
    )
  
      
    
}