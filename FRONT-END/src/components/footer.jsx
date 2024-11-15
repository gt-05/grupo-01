import Logo from "./Logo"
export default function Footer() {
    return (

        <>
            <footer className="w-full h-[380px] text-white bg-[#1F1F1F] ">

                <div className="flex pt-8 justify-center">

                    <div name="Logo" className="flex flex-col pt-6">
                        <Logo ColorLogo="#FFFFFF" />
                        <div className="pt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
                        </div>
                        <ul className="flex flex-nowrap">
                            <li><img src="/src/assets/Facebook.png" alt="" className="mr-8 mt-8" /></li>
                            <li><img src="/src/assets/Instagram.png" alt="" className="mr-8 mt-8" /></li>
                            <li><img src="/src/assets/twitter.png" alt="" className="mr-8 mt-8" /></li>
                        </ul>
                    </div>
                    <div name="home" className="flex ">
                        <ul className="  mt-6 mx-8 pr-20">
                            <li className="text-[18px] pb-6">Informação</li>
                            <li className="text-[16px] pb-4">Sobre Drip Store</li>
                            <li className="text-[16px] pb-4">Segurança</li>
                            <li className="text-[16px] pb-4">Wishlist</li>
                            <li className="text-[16px] pb-4">Blog</li>
                            <li className="text-[16px] pb-4">Trabalhe conosco</li>
                            <li className="text-[16px] pb-4">Meus Pedidos</li>
                        </ul>
                        <ul className="  mt-6 mx-8 pr-28">
                            <li className="text-[18px] pb-6">Categorias</li>
                            <li className="text-[16px] pb-4">Camisetas</li>
                            <li className="text-[16px] pb-4">Calças</li>
                            <li className="text-[16px] pb-4">Bonés</li>
                            <li className="text-[16px] pb-4">Headphones</li>
                            <li className="text-[16px] pb-4">Tênis</li>
                        </ul>
                        <ul className=" mt-6 mx-8">
                            <li className="text-[18px] pb-6">Contato</li>
                            <li className="text-[16px] pb-4">Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br />CE, 60150-161</li>
                            <li className="text-[16px] pb-4">(85) 3051-3411</li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-[#FFFFFF] w-[1240px] h-[1px] opacity-30 m-auto" />

                <span className="flex justify-center text-[13] leading-6 ">@2022 Digital College</span>
            </footer>
        </>


    );
} 