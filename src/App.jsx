import Home from "./pages/Home"
import { useState } from "react"
function App() {

  const[page,setPage]= useState()
  if(page === "pagina1"){
    return <h1>pagina 1</h1>
  }
  if(page === "pagina2"){
    return <h1>pagina 2</h1>
  }


  return (
    <>
    <div>
    <div><a onClick={event => setPagePage('pagina1')}>pagina 1</a></div>
    {/* eventos agora são on... */}
    <div><a onClick={event => setPage('pagina2')}>pagina 2</a></div>
    <div><a onClick={event => setPagePage('pagina2')}>pagina 3</a></div>
    <hr />
    <div>conteudo</div>
    </div>
      
      <Home/>
    </>
  )
}

export default App
