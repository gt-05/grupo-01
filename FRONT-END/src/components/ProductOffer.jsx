import ButtonOffer from "./ButtonOffer";

export default function ProductOffer() {
    return (
        <div className="Container w-full h-[553px] pt-[106px] flex ">

            <div>
                <img src="../src/assets/imageOffer.png" alt="" className="absolute z-10 ml-[52px] pt-[28px]  " />
                <div className="relative rounded-full ml-[129px] bg-gradient-to-b from-[#4200FF]/10 to-[#fff] w-[466px] h-[466px]"></div>
            </div>


            <div className="w-[589px] h-[341px]  ml-[67px]">

                <h1 className="font-bold absolute text-[#C92071] text-[14px] ">Oferta especial</h1>
                <h2 className="font-bold text-[48px] text-[#474747] mt-[17px] h-[100x] leading-[50px] pt-[17px]   ">Air Jordan edição de colecionador</h2>
                <p className="font-[400] text-[16px] t-[#474747] leading-[28px] pt-[17px]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <ButtonOffer />

            </div>
        </div>
    )
}