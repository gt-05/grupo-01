import {useState} from 'react';
import ButtonOffer from './ButtonOffer';


export default function Gallery(props) {
	
	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	};


	let imgs = [
		{"src": "../src/assets/sapato-nike.png"},
		{"src": "../src/assets/sapato-nike-2.png"},
		{"src": "../src/assets/sapato-nike-3.png"},
		{"src": "../src/assets/sapato-nike-4.png"},
		{"src": "../src/assets/sapato-nike-5.png"}
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
	function handlerThumbnailClick(index) {
		setCurrent(index * 100);
		
	}

	let thumbnails = imgs.map((img, index) => {
		return (
			<div key={index} className={`thumbnail w-[110px] h-[80px] bg-[#C95060] rounded flex items-center justify-center min-w-[60px] m-1 cursor-pointer flex ${props.displayThumbs}`} onClick={() => handlerThumbnailClick(index)}>
				<img className= "w-[110px] h-[55px] object-cover"
				src={img.src}
				alt={`thumbnail ${index + 1}`} />
			</div>
		);
	});

	let tagsImg = imgs.map(function (img, index){
		return (
			<div key={index} className={`slide min-w-full mt-[${props.mtslide}]`}>

				<div className={`absolute z-10 w-[510px] h-[318px] m-[100px] mt-[124px]`}>
					<span className={`text-[16px] text-[#F6AA1C] font-bold ${props.display}`}>Melhores ofertas personalizadas</span>
					<h1 className={`text-[64px] text-[#1F1F1F] font-bold ${props.display}`}>Queima de estoque Nike</h1>
					<p className={`text-[18px] text-[#474747] font-normal ${props.display}`}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
					<div className={props.display}>
						<ButtonOffer/>
					</div>
				</div>
				<img src='/src/assets/detalheSlide.png' className={`absolute z-10 ml-[1200px] mt-[78px] ${props.display}`} />
				<img src={img.src} className={`absolute w-[${props.wimageslide}] h-[${props.himageslide}] object-cover z-10 ml-[${props.mlimage}] mt-[${props.mtimage}] ${props.rotate}`}/>
				<img className={`w-full h-full relative ${props.display}`} src="/src/assets/gallery.png" />
			</div>



		)
	});


	return (
		<>
		<div className={`max-w-[${props.wslide}] h-[${props.hslide}]`}>
			
			<div className={`slider relative overflow-hidden rounded mt-[${props.mtproductslide}] ml-[${props.mlproductslide}] w-[${props.width}] h-[${props.height}] bg-${props.bgimagem}`} >
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
		


		<div className={`flex absolute top-[865px] ml-[55px] ${props.displayThumbs}`}>
			<div className="thumbnails gap-6 flex justify-center mt-4">
				{thumbnails}
			</div>
		</div>

		</>
	);
}