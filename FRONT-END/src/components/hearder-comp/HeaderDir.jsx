import React from "react";
import { NavLink } from "react-router-dom";

function HeaderDir (){
    return(
        <div className=" w-60 h-11 flex relative place-items-center top-11 left-[75%]">
        <span className="underline px-4"> <NavLink to={"/RegisterPage"}>Cadastre-se</NavLink></span>
        <NavLink to={"/LoginPage"}><button className="w-28 h-10 rounded bg-pink-600 text-white font-bold text-sm px-4" >Entrar</button></NavLink>
        </div>
    )
}

export default HeaderDir;