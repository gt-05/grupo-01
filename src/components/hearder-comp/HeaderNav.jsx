import React from "react";


 function HeaderNav(){
    return (
    
        <div className="flex w-fit h-7  pt-32 absolute left-20">
            <nav className="" >
                <ul className="flex justify-around">
                    <li className="px-4	">
                    <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="HomePage">Home</a>
                    </li>

                    <li className="px-4	" >
                    <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="ProductListing">Produtos</a>
                    </li>

                    <li className="px-4	">
                    <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="Category">Categorias</a>
                    </li>

                    <li className="px-4	">
                   <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="MeusPedidos">Meus Pedidos</a>
                    </li>
                </ul>
            </nav>
        </div>
    
)
}

export default HeaderNav;