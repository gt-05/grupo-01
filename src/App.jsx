
import {
  RouterProvider
} from "react-router-dom";
import routes from "./routes";

import Layout from "./components/Layout"


function App() {
    
    
  return (

    <>


      <Layout/>

      <RouterProvider router = {routes}/>
      
      
    </>
  )
}

export default App;
