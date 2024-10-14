import Logo from "./Logo"
export default function Footer() {
    return (
        <>
        <footer class="w-full h-[454px] top-[3290px] text-white bg-[#1F1F1F] pl-[100px]">
        <Logo/>
        <div class="flex flex-nowrap">
        <p class="flex mt-6">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
        <ul class="w-[135px] h-[278px] mt-6 mx-8">
            <li class="text-[18px] w-[600px]">Informação</li>
            <li class="text-[16px]">Sobre Drip Store</li>
            <li class="text-[16px]">Segurança</li>
            <li class="text-[16px]">Wishlist</li>
            <li class="text-[16px]">Blog</li>
            <li class="text-[16px]">Trabalhe conosco</li>
            <li class="text-[16px]">Meus Pedidos</li>
        </ul>
        <ul class="w-[96px] h-[240px] mt-6 mx-8">
            <li class="text-[18px] w-[600px]">Categorias</li>
            <li class="text-[16px]">Camisetas</li>
            <li class="text-[16px]">Calças</li>
            <li class="text-[16px]">Bonés</li>
            <li class="text-[16px]">Headphones</li>
            <li class="text-[16px]">Tênis</li>
        </ul>
        <ul class="w-[233px] h-[168px] mt-6 mx-8">
            <li class="text-[18px] w-[600px]">Contato</li>
            <li class="text-[16px]">Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br />CE, 60150-161</li>
            <li class="text-[16px]">(85) 3051-3411</li>
        </ul>
        </div>

        <hr class="bg-[#FFFFFF] w-[1240px] h-[1px] opacity-30"/>

        <span class="flex justify-center text-[13] leading-6">@2022 Digital College</span>
        </footer>
  
        </>
    )
} 