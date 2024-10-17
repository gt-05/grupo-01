    import Footer from "./Footer";

export default function Layout (props){
    return (
      <>
           
            <main>
                {props.children}
            </main>
            <Footer />
      </>
    )
}