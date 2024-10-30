import React from "react";

function FilterBy (){

    
    return(
        
        <div className="h-[480px] py-[10px] w-[600px] bg-white rounded border drop-shadow-[6px_16px_30px_#6962620D]">
            <span className="font-bold text-lg ml-6">Filtrar por: <br /></span> 
            <div className="border-t border-gray-300 my-4 ml-6 w-[80%]">  </div>
            <div className="ml-6 my-3.5">
                <h3 className="font-bold">Marka</h3>
                <input className="bg-pink-600" type="checkbox" />
                <label> Abididas </label>
                <br />
                <input type="checkbox" />
                <label> Naique </label>
                <br />
                <input type="checkbox" />
                <label> Pamu </label>
                <br />
                <input type="checkbox" />
                <label> BequiDelaPuer </label>
                <br />
                <input type="checkbox" />
                <label> Olhimpicus </label>
            </div>
            <div className="ml-6 my-3.5">
                <h3 className=" font-bold">Categoria</h3>
                <input type="checkbox" />
                <label> Esporte </label>
                <br />
                <input type="checkbox" />
                <label> Casual e Lazer </label>
                <br />
                <input type="checkbox" />
                <label> Utilitário </label>
                <br />
                <input type="checkbox" />
                <label> Corrida </label>
                <br />
            </div>
            <div className="ml-6">
                <h3 className="font-bold">Gênero</h3>
                <input type="checkbox" />
                <label> Masculino </label>
                <br />
                <input type="checkbox" />
                <label> Feminino </label>
                <br />
                <input type="checkbox" />
                <label> Unisex </label>
                <br />
            </div>
        </div>
       
        
    )
}

export default FilterBy;