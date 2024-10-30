import arrow from "../assets/Arrows/Right 24px.png";
export default function Section(props){
    let align = props.titleAligh ? props.titleAligh: "left";

    let position = `text-${align}`;

    return (
        <>
        <div className="flex">
            <div className={position + ' grow'}>
                <h2 className="text-2xl font-bold text-[#474747] ml-14 ">{props.title}</h2>
            </div>
            {props.link &&(
                <div className="w-auto flex gap-1">
                    <a className="text-[#C92071] text-lg" href={props.link.href}>{props.link.text}</a>
                    <a href={props.link.href}><img className=" w-[24px] h-[24px] mt-1 mr-[60px]"src={arrow} alt="" /></a>
                   
                </div>
            )}
        </div>
        <div className="max-w-[1150px] flex flex-wrap gap-2.5 m-auto">
        {props.children}
        </div>
        </>
    )

}