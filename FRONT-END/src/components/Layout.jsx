import Footer from "./Footer";
import Header from "./hearder-comp/Header";


 function Layout (props){
    return (
      <>
            <Header/>
            <main className="bg-slate-100	">
                {props.children}
            </main>
            <Footer/>
      </>
    )
}

export default Layout;