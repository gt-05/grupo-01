import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Section from "./Section";

function ProductListing(props) {

    let [products, setProducts] = useState([]);

    useEffect(function() {
        fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(body => {
            let productsResponse = body.sort(function (current, next) {
                return current.price - next.price
            });
            if(props.SelectedOption === 'maior') {
                productsResponse = productsResponse.reverse();
            }
            setProducts(productsResponse);
        });
    }, [props.SelectedOption]);

    return (
        <Section className="flex">
            {props.children}
            {products.map(product => {
                return <ProductCard
                    image={product.images[0].url}  
                    name={product.name} 
                    priceDiscount={product.price_with_discount}
                    slug={product.slug} />
           })}
        </Section>
    );
}

export default ProductListing;


