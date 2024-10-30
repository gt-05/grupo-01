import React from "react";
import { NavLink } from "react-router-dom";


 function HeaderNav(){
    return (
    
        <div className="flex w-fit h-7  pt-32 absolute left-20">
            <nav className="" >
                <ul className="flex justify-around">
                    <li className="px-4">
                    <NavLink to="/" className={({isActive}) => isActive 
                        ? "font-bold underline text-rose-500" : "text-normal hover:font-bold hover:underline hover:text-rose-500" }> Home </NavLink>
                    </li>

                    <li className="px-4	" >
                    <NavLink to="/ProductListing" className={({isActive}) => isActive
                     ? "font-bold underline text-rose-500" : "text-normal hover:font-bold hover:underline hover:text-rose-500"}> Produtos </NavLink>
                    </li>

                    <li className="px-4	">
                    <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="Category">Categorias</a>
                    </li>

                    <li className="px-4	">
                    <a className="no-underline hover:font-bold hover:text-rose-500 hover:underline" href="Category">Meus Pedidos</a>
                    </li>
                </ul>
            </nav>
        </div>
    
)
}

export default HeaderNav;