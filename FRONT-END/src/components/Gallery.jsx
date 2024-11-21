import {useState} from 'react';
import ButtonOffer from './ButtonOffer';


export default function Gallery(props) {

	let itemGallery ="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrhF0-7FI~oTVrdS357fEFsroUy96UUNuzXR-RvFuSWSDu7cx-05hjFUUdK5HzITFU-gJbXx9TUnxgFH6WFTxBTPiw2cGf2oQvi19faO2k4aK0ogh1fOgqTU2SXcAvTVBUZAP2gxHNXzceiPBHiIv2vS4BF8Ah5yAFZUhW70TE5P9YWBEPzcRr6KMOJgA7A2XnsmSg7lSWGXCxrbBDBNau1Z5oSq8dghmZL5Dm39NStvDGC64-SRg0Hyw4BFavhOmooXymR6VOrYW9jvQoeRu0zXlsAQfHlaMfj43xsX0B89OokaxGBe7CfbgYXB13AWAlynHdszsmRwxU326pgV2w__"

	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	};

	
	let imgs =  [
		{ "src": "/src/assets/gallery.png" },
		{ "src": "/src/assets/gallery.png" },
		{ "src": "/src/assets/gallery.png" }
  ];

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

	let tagsImg = imgs.map(function (img) {
		return (
			<div class="slide min-w-full">

				<div className="absolute z-10 w-[510px] h-[318px] m-[100px] mt-[124px]">
					<span className="text-[16px] text-[#F6AA1C] font-bold">Melhores ofertas personalizadas</span>
					<h1 className="text-[64px] text-[#1F1F1F] font-bold">Queima de estoque Nike</h1>
					<p className="text-[18px] text-[#474747] font-normal">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
					<ButtonOffer/>
				</div>
				<img src='/src/assets/detalheSlide.png' class=" absolute z-10 ml-[1263px] mt-[78px]"/>
				<img src={itemGallery} class="absolute z-10 ml-[564.02px] origin-bottom -rotate-[19.34deg] hover:rotate-[25deg] duration-500 " />
				<img class="w-full h-full relative " src={img.src} />
			</div>
		)
});


	return (
		<div className={`w-[${props.width}] h-[${props.height}]= "570px"`}>
			<div className="slider relative overflow-hidden">
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
	);
}