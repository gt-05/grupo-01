import { FiSearch } from "react-icons/fi";

function HeaderSearch(){
    return(
        <form className=" h-11 w-[730px] absolute top-10 left-[380px] ">
            <input className="pl-3 h-12 w-full bg-slate-100 relative" type="text" placeholder='Buscar produtos' />
            <button className="left-[700px] absolute h-11 opacity-25 bg-slate-100"><FiSearch/></button>
        </form>
    )
}

export default HeaderSearch;