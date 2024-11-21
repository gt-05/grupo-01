import {useState} from 'react';
import ButtonOffer from './ButtonOffer';


export default function Gallery(props) {
	
	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	};


	let imgs = [
		{"src": `${props.images}`},
		{"src": `${props.images}`},
		{"src": `${props.images}`},
		{"src": `${props.images}`}
	]


	function handlerSlide(direction) {
		
		if (direction === 'next') {
			let position = current + 100;
			setCurrent(position > (imgs.length-1)*100 ? 0 : position);
		}

		if (direction === 'prev') {
			let position = current - 100;
			setCurrent(position < 0 ? (imgs.length - 1) * 100 : position);
		}
	};



	let tagsImg = imgs.map(function (){
		return (
			<div className={`slide min-w-full mt-[${props.mtslide}]`}>

				<div className={`absolute z-10 w-[510px] h-[318px] m-[100px] mt-[124px]`}>
					<span className={`text-[16px] text-[#F6AA1C] font-bold ${props.display}`}>Melhores ofertas personalizadas</span>
					<h1 className={`text-[64px] text-[#1F1F1F] font-bold ${props.display}`}>Queima de estoque Nike</h1>
					<p className={`text-[18px] text-[#474747] font-normal ${props.display}`}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
					<div className={props.display}>
						<ButtonOffer/>
					</div>
				</div>
				<img src='/src/assets/detalheSlide.png' className={`absolute z-10 ml-[1200px] mt-[78px] ${props.display}`} />
				<img src='/src/assets/sapato-nike.png' className={`absolute z-10 ml-[${props.mlimage}] mt-[${props.mtimage}] ${props.rotate}`}/>
				<img className={`w-full h-full relative ${props.display}`} src="/src/assets/gallery.png" />
			</div>



		)
	});


	return (
		<>
		<div className={`max-w-[${props.wslide}] h-[${props.hslide}]`}>
			
			<div className={`slider relative overflow-hidden mt-[${props.mtproductslide}] ml-[${props.mlproductslide}] w-[${props.width}] h-[${props.height}] bg-${props.bgimagem}`} >
				<div 
					className="slides flex ease-in-out duration-500"
					style={css}>
					{tagsImg}
				</div>
				<span 
					className="absolute top-1/2 cursor-pointer" 
					id="prev" 
					onClick={event => handlerSlide('prev')}>
					<img src="/src/assets/icon/prev.svg" /> 
				</span>
				<span 
					className="absolute top-1/2 cursor-pointer right-0" 
					id="next"
					onClick={event => handlerSlide('next')}>
					<img src="/src/assets/icon/next.svg" />
				</span>
			</div>

		</div>
		


		<div className={`flex gap-8 absolute top-[865px] ml-[55px] ${props.displayThumbs}`}>
			<button>
				<div className=" w-[110px] h-[80px] bg-red-200 rounded flex items-center justify-center">
					<img className=" w-[95px] " src="/src/assets/sapato-nike.png"/>
				</div>
			</button>
			<button>
				<div  className=" w-[110px] h-[80px] bg-green-400 rounded flex items-center justify-center">
					<img className="  w-[95px] " src="/src/assets/sapato-nike.png"/>
				</div>
			</button>
			<button>
				<div className="w-[110px] h-[80px] bg-gray-300 rounded flex items-center justify-center">
					<img className="  w-[95px] " src="/src/assets/sapato-nike.png"/>
				</div>
			</button>
			<button>
				<div  className=" w-[110px] h-[80px] bg-yellow-200 rounded flex items-center justify-center">
					<img className="  w-[95px] " src="/src/assets/sapato-nike.png"/>
				</div>
			</button>
			<button>
				<div className=" w-[110px] h-[80px] bg-[#C95060] rounded flex items-center justify-center">
					<img className="  w-[95px] " src="/src/assets/sapato-nike.png"/>
				</div>
			</button>
		</div>

		</>
	);
}