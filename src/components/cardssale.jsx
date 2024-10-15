export default function CardSale() {
    return (
        <>
            <section className=" my-10 mx- text-center ">
                <div className="px-[500px]">
                    <div className="">
                        <h1 className="mb-2 text-start text-nowrap font-bold text-base text-[#474747] font-[inter]">
                            Coleções em destaque
                        </h1>
                    </div>

                    <div className="flex gap-3 justify-center ">
                        <div className="rounded">
                            <img className="rounded" src="./public/collection-1.png" alt="" />
                        </div>
                        <div className="">
                            <img className="rounded" src="./public/collection-2.png" alt="" />
                        </div>
                        <div className="">
                            <img className="rounded" src="./public/collection-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}