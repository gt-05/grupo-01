export default function Gallery(){
    return(
        <>
        <div className="gallery max-w[1440px] max-h[681px]">
            <div className="slider relative overflow-hidden ">
                <div className="slides flex ease-in-out duration-500">
                    <span className=" absolute top-1/2 bg-[#333] text-white p-[10px] cursor-pointer" id="prev">
                    <img src="./assets/prev.svg"></img>
                    </span>
                    <span className=" absolute top-1/2 bg-[#333] text-white p-[10px] cursor-pointer right-0" id="next">
                    <img src="./assets/next.svg"></img>
                    </span>
                    

                </div>
            </div>
        </div>

        </>
    )
}