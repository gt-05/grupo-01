import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import Header from './components/hearder-comp/Header'

export default createBrowserRouter(createRoutesFromElements
    (  
        <>
            <Route path='/' element={(<Header/>)}/>
            <Route path='/ProductListing' element={<h1>Produtos</h1> }/>
            <Route path='/Category' element={<h1>Categorias</h1> }/>
            <Route path='/MeusPedidos' element={<h1>Meus Pedidos</h1> }/>
        </>
    )
)
