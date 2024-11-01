import { useParams } from "react-router-dom"

export default function ProductView(props){
    
    let [productList, setProductList] = useState()

    let params = useParams();
    fetch(`http://localhost:3000/${params.slug}`)
        .then(response => response.json())
        .then(body => {
            setProductList(body);
        });
    return(
        <>


            {
                productList.map(image => {
                    return(
                        <>
                    <div>
                        Nome do produto: <h2>{product.name}</h2>
                        preço do produto: <h2>{product.price}</h2>
                        desconto do produto: <h2>{product.stock}</h2>
                        descrição do produto: <h2>{product.description}</h2>
                    </div>
                            {product.images2.map(image => {
                                return <img src={image.url} alt="" />
                            })}
                        </>
                    )
                })
            }
        </>
    )
}