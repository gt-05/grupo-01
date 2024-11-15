import { FiSearch } from "react-icons/fi";

function HeaderSearch(){
    return(
        <form className=" h-11 w-[60%] absolute top-10 left-[380px] ">
            <input className="pl-3 h-12 w-[75%] bg-slate-100 relative" type="text" placeholder='Buscar produtos' />
            <button className="left-[71%] absolute h-12 opacity-25 bg-slate-100"><FiSearch className="h-6 w-6"/></button>
        </form>
    )
}

export default HeaderSearch;