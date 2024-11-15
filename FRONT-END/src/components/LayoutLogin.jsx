import Footer from "./Footer";
import HeaderLogin from "./hearder-comp/HeaderLogin";

function LayoutLogin (props) {

    return(
        <>
        <HeaderLogin/>
        <main>
            <div className="flex bg-gradient-to-t from-gray-200 to-violet-300 p-8">
            {props.children}
                <img className="w-[900px]" src="https://s3-alpha-sig.figma.com/img/95ea/b6de/38b674033b641e23cb9d658703e259af?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h0YgSvviQuE9Gl9Q43bQIgzLxQtrZKYH7Z0n4oT8TooLEsMHjLRBreor7I9k-WEhdoKlegGxuOJaveyEPMzqndNs2AvnNh3gJkO~nzSM-wQGdYDyuWYeMVWdm03M8HRp5Erv2wgdNR3FklSGtaB3ixMba6tldexyAw4wDcLVo6wVlJobguIG5jKvH19uubJJghS3pwST6PIQk06JpYvWvboV2mlIpNnO1SxHWWtqM3poC~qZw3VQIuoc-9huaMWyGPKDzgna7RugQ-h02nn~Ufkm~fhGuRZtiqBN4oG-hxHHkEvVuX0DFAnMpXYjoCaDUqSXk0SEPYvjoJVAxlPX9Q__" />
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default LayoutLogin;