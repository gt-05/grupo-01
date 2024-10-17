export default function ProductCard(props){
  return (
    <>
      <div className="w-[292px] h-[439px] bg-white-300 flex flex-col mt-10">
        <div className="bg-[#F9F8FE] w-[292px] h-[321px] rounded border">
          <div className="w-[96px] h-[32px] bg-[#E7FF86] rounded-[29px] mt-3 ml-5 text-center text-sm font-bold leading-[22px]">30% OFF</div>
          <img className=" w-[248px] h-[134px] -rotate-[30deg] drop-shadow-[-3.61px_4.52px_6.52px_#000000] mt-20" src={props.imagem} alt={props.nome} />
        
          <div className="flex flex-col gap-1 mt-[75px]">
            <span className="text-xs text-[#8F8F8F] leading-6 mt-5">Tênis</span>
            <span className="  text-2xl font-normal leading-[38px]">{props.name}</span>
            <div className="flex gap-2 ">
              <span className="line-through">{props.price}</span>
              <span className="font-bold">{props.priceDiscount}</span>
            </div>
          </div>
        
        </div>
       
        
      </div>
    </>
  )
}

