import React from "react";


 function HeaderNav(){
    return (
    
        <div className="flex w-fit h-7  pt-32 absolute left-20">
            <nav className="" >
                <ul className="flex justify-around">
                    <li className="px-4	">
                    <a href="#">Home</a>
                    </li>

                    <li className="px-4	" >
                    <a href="#">Produtos</a>
                    </li>

                    <li className="px-4	">
                    <a href="#">Categorias</a>
                    </li>

                    <li className="px-4	">
                   <a href="#">Meus Pedidos</a>
                    </li>
                </ul>
            </nav>
        </div>
    
)
}

export default HeaderNav;