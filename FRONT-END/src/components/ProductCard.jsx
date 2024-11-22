import { NavLink } from "react-router-dom";

export default function ProductCard(props){
  return (
    <>
      <NavLink to="/ProductViewPage" className={({isActive}) => isActive}>
      
        <div className="bg-white-300 flex flex-col">
          <div className="w-[280px] bg-[#F9F8FE] rounded border drop-shadow-[6px_16px_30px_#6962620D]">
            <div className="absolute w-[96px] h-[32px] bg-[#E7FF86] drop-shadow-[-3.61px_4.52px_6.52px_#000000] rounded-[29px] mt-3 ml-5 text-center text-sm font-bold leading-[22px]">30% OFF</div> 
            <img src={props.image.url} alt={props.name} />
              
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#8F8F8F] ">Tênis</span>
              <span className="text-2xl font-normal leading-[38px]">{props.name}</span>
              <div className="flex gap-2 ">
                <span className="line-through">{props.price}</span>
                <span className="font-bold">{props.priceDiscount}</span>
              </div>
            </div> 
          </div>
        </div>
      

      </NavLink>

        
      

    </>
  )
}