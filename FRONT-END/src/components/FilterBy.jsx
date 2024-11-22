import React from "react";

function FilterBy (){

    
    return(
        
        <div className="bg-[white] min-w-[300px] h-full px-[30px] py-[30px] rounded ml-[100px]"> {/* Div Conteiner */}
        <form>

        <div className="pb-[20px] border-b-[1px] border-[#CCCCCC] font-bold text-[#474747] text-[16px]"> {/* Div FiltrarBy */}
            Filtrar por
        </div>
        <div className="pt-[20px] ">  {/* Div Marka */}
            <div className=" font-bold text-[#474747] text-[16px] pb-2">
            Marka
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="adiddas" name="adiddas" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="adiddas"> Adiddas</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="calenciaga" name="calenciaga" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="calenciaga"> Calenciaga</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="k-swiss" name="k-swiss" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="k-swiss"> K-swiss</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="nike" name="nike" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="nike"> Nike</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="puma" name="puma" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="puma"> Puma</label>
            </div>
        </div>

        <div className="pt-[20px]"> {/* Div Categorias */}
            <div className="font-bold text-[#474747] text-[16px] pb-2">
            Categoria
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="esporte-e-lazer" name="esporte-e-lazer" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="esporte-e-lazer"> Esporte e lazer</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="casual" name="casual" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="casual"> Casual</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="utilitario" name="utilitario" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="utilitario"> Utilitário</label>
            </div>
            <div className="flex flex items-center mb-2"> 
                <input type="checkbox" id="corrida" name="corrida" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="corrida"> Corrida</label>
            </div>
        </div>

        <div className="pt-[20px]"> {/* Div Gênero */}
            <div className="font-bold text-[#474747] text-[16px] pb-2">
            Gênero
            </div>
            <div className="flex items-center mb-2"> 
                <input type="checkbox" id="masculino" name="masculino" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="masculino"> Masculino</label>
            </div>
            <div className="flex items-center mb-2"> 
                <input type="checkbox" id="feminino" name="feminino" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="feminino"> Feminino</label>
            </div>
            <div className="flex items-center mb-2"> 
                <input type="checkbox" id="unisex" name="unisex" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="unisex"> Unisex</label>
            </div>
        </div>

        <div className="pt-[20px]"> {/* Div Estado */}
            <div className="font-bold text-[#474747] text-[16px] pb-2">
            Estado
            </div>
            <div className="flex items-center mb-2">
                <input type="radio" id="novo" name="estado" value="novo" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="novo">Novo</label>
            </div>
            <div className="flex items-center mb-2">
                <input type="radio" id="usado" name="estado" value="usado" className="w-[22px] h-[22px] accent-rose-500 "/>
                <label className="text-[14px] text-[#474747] pl-2" for="usado">Usado</label>
            </div>
        </div>
        </form>
    </div>
       
        
    )
}

export default FilterBy;