import {useState} from 'react';
import ButtonOffer from './ButtonOffer';


export default function Gallery() {
    let itemGalelly = "https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDVZtdsE39mPopRkP-oid~HKVPt~4OOhSuAUV99Nvc5qZs0V0VloN4cZbwmQSmJPh3SZ4jJrMzlCFVI-73YG-CCNnV2EHTxnWtfa6A42LxP8D6MV0B1-GL534am1az5kot0nTfCSjRW2fwJr-M1l0yc4iTOmG9HIvyDmAjA735vFMeOknCQp3TFo72DvrgzuDEGef6uswYfGZf8P1olTYZqztJzbZ~V5-iRuN0TJeYtBjVtELKfzZrS10PM0nDnbA~0v6H8d~4HftgTLYKi6BdlqgezHKevNaVgSsXbElsB~XmcO4lgldmGNhnqCE4IaPXk-oCw0Sx7y8B4r5J7UbQ__"

	const [current, setCurrent] = useState(0);

	let css = {
		transform: `translateX(-${current}%)`
	}

	let imgs =  [
        { "src": "/src/assets/gallery.png" },
        { "src": "/src/assets/gallery.png" },
        { "src": "/src/assets/gallery.png" }
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
	}

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
                <img src={itemGalelly} class="absolute z-10 ml-[564.02px] origin-bottom -rotate-[19.34deg] hover:rotate-[25deg] duration-500 " />
				<img class="w-full h-full relative " src={img.src} />
			</div>
		)
	});


	return (
		<div className="gallery max-w-full max-h-[681px] m-auto">
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