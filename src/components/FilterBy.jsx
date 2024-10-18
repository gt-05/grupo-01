import React from "react";

function FilterBy (){
    return(
        <div className="h-96 w-60 border-current border-2 border-solid ">
        <h1> Filtrar por:</h1>
            <div>
                <h3>Marka</h3>
                <input className="bg-pink-600" type="checkbox" />
                <label> Abididas </label>
                <br />
                <input type="checkbox" />
                <label> Naike </label>
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
            <div>
                <h3>Categoria</h3>
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
            <div>
                <h3>Gênero</h3>
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


























/*import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import OrderBy from "./OrderBy";

export default createBrowserRouter(createRoutesFromElements
    (  
        <>
            <Route path='/' element={(<h1>Rota base</h1>)}/>
            <Route path='/produtos' element={<OrderBy/>}/>
        </>
    )
)*/




