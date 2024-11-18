import star1 from "../assets/icon/icon-star-1.png"
import star0 from "../assets/icon/icon-star-0.png"
import starwhite from "../assets/icon/icon-star-white.png"
import ProductOptions from "./ProductOptions";

function BuyBox(props){

    return(
        <>
           
            <div className="flex flex-col gap-4" >
                <h1 className="text-[#1F1F1F] w-[440px] h-[72px] absolute top-[274px] left-[841px] font-bold text-[32px] leading-[36px] tracking-[1px]">{props.name}</h1>
                <p className="text-[#666666] w-[425px] h-[21px] absolute top-[356px] left-[841px] font-inter text-sm font-medium leading-5 tracking-wide text-left">{props.reference}</p>
                <div className="flex absolute top-[391px] left-[841px]">
                    <img className="w-[24px] h-[20px]" src={star1} alt=""/>
                    <img className="w-[24px] h-[20px]" src={star1} alt=""/>
                    <img className="w-[24px] h-[20px]" src={star1} alt=""/>
                    <img className="w-[24px] h-[20px]" src={star1} alt=""/>
                    <img className="w-[24px] h-[20px]" src={star0} alt=""/>
                   
                </div>
                <div className=" flex items-center bg-[#F6AA1C] w-[63px] h-[23px] absolute top-[387px] left-[947px] rounded-[4px] pt-[6px] pr-[10px] pb[6px] pl[10px] mt-[3px] ml-6">
                    <p className=" text-[#FFFFFF] font-bold flex items-center  w-[23px] h-[11px] absolute top-[6px] left-[12px] ml-5 mb-2">4.7</p> 
                    <img className="flex items-center w-[18px] h-[12px] top-[385px] left-[841px] mb-2 ml-2" src={starwhite} alt=""/>
                </div>
                <p className="text-[#8F8F8F] w-[111px] h-[16px] absolute top-[390px] left-[1020px] font-inter text-[14px] font-medium leading-[22px] tracking-[0.25px] text-left ml-6">({props.rating})</p>
                
                    
                <p className=" flex text-[#1F1F1F] w-[89px] h-[36px] absolute top-[430px] left-[842px] font-inter text-2xl font-bold leading-9 tracking-[1px]">R$219,00</p>
                <p className=" flex w-[55px] h-[28px] line-through absolute top-[440px] left-[969px] text-[#CCCCCC]">R$219,00</p>
                
                
                <p className="text-[#8F8F8F] w-[162px] h-[22px] absolute top-[488px] left-[841px] font-inter text-xs font-bold leading-[22px] tracking-[0.75px] text-left">Descrição do produto</p>
                <p className="text-wrap absolute top-[515px] left-[841px]">{props.description}</p>
            </div>

            <ProductOptions
                options = {
                    ["39", "40", "41", "42", "43" ]
                }
                shape = "square"
                type = "text"
            />

            <button className=" w-[220px] h-[48px] absolute top-[799px] left-[841px] rounded-[8px] bg-[#FFB31F] text-white text-sm font-bold leading-6 tracking-wide text-center mt-4">COMPRAR</button>
        
        </>


    )

};

export default BuyBox;

