import { 
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
)



