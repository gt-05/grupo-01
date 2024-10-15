import { FiSearch } from "react-icons/fi";

function HeaderSearch(){
    return(
        <form>
            <input type="text" placeholder='Buscar produtos' />
            <button className=""><FiSearch/></button>
        </form>
    )
}

export default HeaderSearch;