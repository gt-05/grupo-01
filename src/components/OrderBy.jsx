import React, { useState } from "react";

function OrderBy (){
    const [SelectedOption, setSelectedOption] = useState('');
    return(
        <div className="border-current border-solid border-2 h-11 w-[305px] flex relative">
            <span className="font-bold p-2 ml-2.5 tracking-wide"> Ordenar por: </span>
        <select className="absolute end-5 p-2 items-center tracking-wide" value={SelectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
            <option value= "" disabled>Selecione o item</option>
            <option value= "todos">Todos</option>
            <option value= "menor">Menor preço</option>
            <option value= "maior">Maior preço</option>
        </select>
        </div>
    )
}

export default OrderBy;