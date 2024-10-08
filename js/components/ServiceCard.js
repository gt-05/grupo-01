export default function ServiceCard(props){
    return `
        <div class="section-items-frete bg-white w-[600px] mb-4 h-[65px] border-2">
                            <ul class="box-frete flex justify-around items-center">
                            <li class="item-frete flex flex-col justify-between mb-1 mt-1">
                            <span class="item-1 text-[10px]">Plano</span>
                            <span class="item-2 text-[15px] font-bold">${props.name}</span>
                            </li>
                            <li class="item-frete flex flex-col justify-between mb-1 mt-1">
                            <span class="item-1 text-[10px]">Prazo </span>
                            <span class="item-2 text-[15px] font-bold">${props.days} dias</span>
                            </li>
                            <li class="item-frete flex flex-col justify-between mb-1 mt-1">
                            <span class="item-1 text-[10px]">Preço</span>
                            <span class="item-price text-[10px] font-bold text-gray-600 line-through">R$${props.price}</span>
                            <span class="item-promotion text-[18px] font-bold ">R$${props.priceWithDiscount}
                            </li>
                            <li class="item-frete flex flex-col justify-between mb-1 mt-1">
                            <span class="item-1 text-[10px]">Data da postagem</span>
                            <span class="item-2 text-[15px] font-bold">16/09/2024</span>
                            </li>
                            </ul>
                            </div>
    `;
}