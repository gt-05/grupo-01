import Logo from "./Logo"
export default function Footer() {
    return (

        <>

        <footer className="w-full h-[454px] top-[3290px] text-white bg-[#1F1F1F] pl-[100px]">
            <Logo/>
            <div className="flex flex-nowrap">
            <p className="flex mt-6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
            <ul className="w-[135px] h-[278px] mt-6 mx-8">
                <li className="text-[18px] w-[600px]">Informação</li>
                <li className="text-[16px]">Sobre Drip Store</li>
                <li className="text-[16px]">Segurança</li>
                <li className="text-[16px]">Wishlist</li>
                <li className="text-[16px]">Blog</li>
                <li className="text-[16px]">Trabalhe conosco</li>
                <li className="text-[16px]">Meus Pedidos</li>
            </ul>
            <ul className="w-[96px] h-[240px] mt-6 mx-8">
                <li className="text-[18px] w-[600px]">Categorias</li>
                <li className="text-[16px]">Camisetas</li>
                <li className="text-[16px]">Calças</li>
                <li className="text-[16px]">Bonés</li>
                <li className="text-[16px]">Headphones</li>
                <li className="text-[16px]">Tênis</li>
            </ul>
            <ul className="w-[233px] h-[168px] mt-6 mx-8">
                <li className="text-[18px] w-[600px]">Contato</li>
                <li className="text-[16px]">Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br />CE, 60150-161</li>
                <li className="text-[16px]">(85) 3051-3411</li>
            </ul>
            </div>

            <hr className="bg-[#FFFFFF] w-[1240px] h-[1px] opacity-30"/>

            <span className="flex justify-center text-[13] leading-6">@2022 Digital College</span>
        </footer>


        </>

    )
}

        
