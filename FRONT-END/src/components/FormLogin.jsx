import React from "react";
import { NavLink } from "react-router-dom";


 function FormLogin() {
    
    return (
    <>     
                <div className="border m-auto w-[400px]  h-[400px] mt-[100px] bg-slate-100 bg-opacity-80 rounded"> 
                    <h1 className="font-bold text-[25px] ml-[50px] mt-[20px]"> Acesse sua conta </h1>
                    <h3 className="ml-[50px] pt-4">Cliente novo? Então registre-se <NavLink to='/RegisterPage' className="underline">aqui</NavLink> </h3>
                    
                    <form className="flex flex-col w-[300px] m-auto gap-2 mt-[20px] ">
                        <label className="font-bold text-slate-700">Login*</label>
                        <input type="text" className=" w-[300px] h-[35px] rounded-[9px]" placeholder="Insira seu login ou email"/>
                        <label className="font-bold text-slate-700">Password*</label>
                        <input type="password" className="border w-[300px] h-[35px] rounded" placeholder="Insira sua senha"/>
                        <p className="underline text-slate-700"><NavLink>Esqueci minha senha</NavLink></p>
                        <button className="bg-pink-600 text-white font-bold w-[300px] h-[35px] rounded mt-[2px]">Entrar</button>
                        <p className="text-slate-700"> ou acesse com: </p>
                    </form>
                </div>      
    </>
    )
        
} 

export default FormLogin;