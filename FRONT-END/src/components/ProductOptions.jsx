
function ProductOptions(props){

    
    return(
        <>
            
            <div className="w-[280px] h-[80px] top-[611px] left-[841px] mt-6">
                <p className="font-inter text-sm font-bold leading-5 tracking-[0.75px] text-left text-[#8F8F8F]">Tamanho</p>
                <div className="flex gap-2 mt-2">
                    <button className="flex items-center justify-center text-[#CCCCCC] w-12 h-12 top-[643px] left-[841px] rounded border-2 hover:bg-[#C92071] font-inter text-base font-bold leading-6 tracking-[0.75px] text-center text-[#474747] hover:text-white">
                        {props.options[0]}
                    </button>
                    <button className="flex items-center justify-center text-[#CCCCCC] w-12 h-12 top-[643px] left-[841px] rounded border-2 hover:bg-[#C92071] font-inter text-base font-bold leading-6 tracking-[0.75px] text-center text-[#474747] hover:text-white">
                        {props.options[1]}
                    </button>
                    <button className="flex items-center justify-center text-[#CCCCCC] w-12 h-12 top-[643px] left-[841px] rounded border-2 hover:bg-[#C92071] font-inter text-base font-bold leading-6 tracking-[0.75px] text-center text-[#474747] hover:text-white">
                        {props.options[2]}
                    </button>
                    <button className="flex items-center justify-center text-[#CCCCCC] w-12 h-12 top-[643px] left-[841px] rounded border-2 hover:bg-[#C92071] font-inter text-base font-bold leading-6 tracking-[0.75px] text-center text-[#474747] hover:text-white">
                        {props.options[3]}
                    </button>
                    <button className="flex items-center justify-center text-[#CCCCCC] w-12 h-12 top-[643px] left-[841px] rounded border-2 hover:bg-[#C92071] font-inter text-base font-bold leading-6 tracking-[0.75px] text-center text-[#474747] hover:text-white">
                        {props.options[4]}
                    </button>
                    
                </div>
            
            </div>
            <div className="w-[186px] h-[71px] top-[701px] left-[841px] mt-2">
            <p className="font-inter text-sm font-bold leading-5 tracking-[0.75px] text-left text-[#8F8F8F]">Cor</p>
                <div className="flex gap-3 mt-2">
                    <button className="w-[31px] h-[31px] rounded-full bg-[#6FEEFF] border-2 hover:border-[#C92071]"></button>
                    <button className="w-[31px] h-[31px] rounded-full bg-[#C92071] border-2 hover:border-[#C92071]"></button>
                    <button className="w-[31px] h-[31px] rounded-full bg-[#5E5E5E] border-2 hover:border-[#C92071]"></button>
                    <button className="w-[31px] h-[31px] rounded-full bg-[#6D70B7] border-2 hover:border-[#C92071]"></button>
                </div>

            </div>
           


        </>

    )

};

export default ProductOptions;