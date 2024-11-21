import { useState } from "react";

function GalleryProductView(props){

    const [current, setCurrent] = useState(0);

    let css = {
        transform: `translateX(-${current}%)`
    };

    let imgs = [
        props.images[0],
        props.images[1],
        props.images[2],
        props.images[3]
    ];

    function handlerSlide(direction){
        
        if(direction === "next"){
            let position = current + 100;
            setCurrent(position > (imgs.length-1) * 100 ? 0 : position);
        }

        if(direction === "prev"){
            let position = current - 100;
            setCurrent(position < 0 ? (imgs.length-1) * 100 : position);
        }
    }
    
    let tagsImg = imgs.map(function(img){
        return(
            <div className="min-w-full h-[630px]">
                <img className="mt-[170px] ml-[25px]" src={img.src}/>
            </div>
        ) 
    });

   
    return(
        <>
            <div className="max-w-[780px] h-[20px]">
                
                <div className="relative overflow-hidden mt-[50px] ml-[45px] bg-blue-200 rounded">
                    <div className="flex ease-in-out duration-500 ml-[90px]" style={css}>
                        {tagsImg}

                    </div>
                    <span className="absolute top-1/2 p-2 cursor-pointer" id="prev" onClick={event => handlerSlide('prev')}>
                        <img src="/src/assets/icon/prev.svg" /> 
                    </span>
                    <span className="absolute top-1/2 p-2 cursor-pointer right-0" id="next" onClick={event => handlerSlide('next')}>
                        <img src="/src/assets/icon/next.svg" />
                    </span>

                </div>
                
            </div>

            <div className="flex gap-5 absolute top-[900px] ml-[45px]">
                <button>
                    <div className=" w-[130px] h-[90px] bg-red-200 rounded flex items-center justify-center">
                        
                        <img className=" w-[120px]" src="/src/assets/sapato-nike.png"/>

                    </div>
                </button>
                <button>
                    <div  className=" w-[130px] h-[90px] bg-green-400 rounded flex items-center justify-center">
                        <img className=" w-[120px]" src="/src/assets/sapato-nike.png"/>

                    </div>
                </button>
                <button>
                    <div className=" w-[130px] h-[90px] bg-gray-300 rounded flex items-center justify-center">
                        <img className=" w-[120px]" src="/src/assets/sapato-nike.png"/>

                    </div>
                </button>
                <button>
                    <div  className=" w-[130px] h-[90px] bg-yellow-200 rounded flex items-center justify-center">
                        <img className=" w-[120px]" src="/src/assets/sapato-nike.png"/>

                    </div>
                </button>
                <button>
                    <div className=" w-[130px] h-[90px] bg-[#C95060] rounded flex items-center justify-center">
                        <img className=" w-[120px]" src="/src/assets/sapato-nike.png"/>

                    </div>
                </button>

            </div>
        
        </>

    )

}

export default GalleryProductView;