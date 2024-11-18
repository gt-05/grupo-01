import React from "react";
import { NavLink } from "react-router-dom";


 function FormRegister() {
    
    return (
    <>         
                <div className="m-auto w-[400px]  h-[500px] mt-[100px] bg-slate-100 bg-opacity-80 rounded"> 
                    <h1 className="font-bold text-[25px] ml-[50px] mt-[20px]"> Crie sua conta </h1>
                    <h3 className="ml-[50px] pt-4">Já é cliente? Faça o login <NavLink to='/LoginPage' className="underline">aqui</NavLink> </h3>
                    
                    <form className="flex flex-col w-[300px] m-auto gap-2 mt-[20px] ">
                        <label className="font-bold text-slate-700">Nome*</label>
                        <input type="text" className=" w-[300px] h-[35px] rounded-[9px]" placeholder="Insira seu nome"/>
                        <label className="font-bold text-slate-700">Sobrenome*</label>
                        <input type="taxt" className="border w-[300px] h-[35px] rounded" placeholder="Insira seu sobrenome"/>
                        <label className="font-bold text-slate-700">Email*</label>
                        <input type="email" className="border w-[300px] h-[35px] rounded" placeholder="Insira seu email"/>
                        <label className="font-bold text-slate-700">Password*</label>
                        <input type="password" className="border w-[300px] h-[35px] rounded" placeholder="Insira sua senha"/>
                        
                        <button className="bg-pink-600 text-white font-bold w-[300px] h-[35px] rounded mt-[2px]">Criar conta</button>
                        <p className="text-slate-700"> ou acesse com: </p>
                    </form>
                </div>  
                   
    </>
    )
        
} 

export default FormRegister;