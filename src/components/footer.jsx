import Logo from "./Logo"
export default function Footer() {
    return (

        <>
            <footer class="w-full h-[454px] mt-[100px] text-white bg-[#1F1F1F] ">

                <div class="flex pt-8 justify-center">

                    <div name="Logo" class="flex flex-col pt-6">
                        <Logo ColorLogo="#FFFFFF" />
                        <div class="pt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
                        </div>
                        <ul class="flex flex-nowrap">
                            <li><a href="#"></a><img src="/src/assets/Facebook.png" alt="" class="mr-8 mt-8" /></li>
                            <li><a href="#"></a><img src="/src/assets/Instagram.png" alt="" class="mr-8 mt-8" /></li>
                            <li><a href="#"></a><img src="/src/assets/twitter.png" alt="" class="mr-8 mt-8" /></li>
                        </ul>
                    </div>
                    <div name="home" class="flex ">
                        <ul class="  mt-6 mx-8 pr-20">
                            <li class="text-[18px] pb-6">Informação</li>
                            <li class="text-[16px] pb-4">Sobre Drip Store</li>
                            <li class="text-[16px] pb-4">Segurança</li>
                            <li class="text-[16px] pb-4">Wishlist</li>
                            <li class="text-[16px] pb-4">Blog</li>
                            <li class="text-[16px] pb-4">Trabalhe conosco</li>
                            <li class="text-[16px] pb-4">Meus Pedidos</li>
                        </ul>
                        <ul class="  mt-6 mx-8 pr-28">
                            <li class="text-[18px] pb-6">Categorias</li>
                            <li class="text-[16px] pb-4">Camisetas</li>
                            <li class="text-[16px] pb-4">Calças</li>
                            <li class="text-[16px] pb-4">Bonés</li>
                            <li class="text-[16px] pb-4">Headphones</li>
                            <li class="text-[16px] pb-4">Tênis</li>
                        </ul>
                        <ul class=" mt-6 mx-8">
                            <li class="text-[18px] pb-6">Contato</li>
                            <li class="text-[16px] pb-4">Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br />CE, 60150-161</li>
                            <li class="text-[16px] pb-4">(85) 3051-3411</li>
                        </ul>
                    </div>
                </div>
                <hr class="bg-[#FFFFFF] w-[1240px] h-[1px] opacity-30 m-auto" />

                <span class="flex justify-center text-[13] leading-6 ">@2022 Digital College</span>
            </footer>
        </>


    );
} 