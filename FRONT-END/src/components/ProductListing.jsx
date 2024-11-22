import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Section from "./Section";

function ProductListing(props) {

    let [products, setProducts] = useState([]);

    useEffect(function() {
        fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(body => {
            let productsResponse = body.products.sort(function (current, next) {
                return current.price - next.price
            });
            if(props.SelectedOption === 'maior') {
                productsResponse = productsResponse.reverse();
            }
            setProducts(productsResponse);
        });
    }, [props.SelectedOption]);

    return (
        <div>
            <Section>
                {props.children}
                {products.map((product, index) => {
                    return <ProductCard
                        key={index}
                        image={product.images[0]}  
                        name={product.name} 
                        price={product.price} 
                        priceDiscount={product.price_with_discount} />
            })}
            </Section>
        </div>
    );
}

export default ProductListing;
