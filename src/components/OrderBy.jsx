import React from "react";

function OrderBy (props){
    return(

        <select>
            <span>Ordenar por:</span>
            <option>Menor preço</option>
            <option>Maior preço</option>
        </select>
    )
}

export default OrderBy;