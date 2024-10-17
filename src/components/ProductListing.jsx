
import ProductCard from "./ProductCard";
export default function ProductListing(){

    const products = [0,1,2,3,4,5,6,7];
    
    return (
        
        <div className="grid grid-cols-4 gap-4">
            {products.map(() =>(
                <ProductCard
                imagem= "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fURrG6vgSCFQhnnPRZMoQ6BPACmIkQPUwUTFxchiMsc8UGkwKHZWHYMHNzM1c5kriD8~OnJUbS1udRJkaRxn2NsL2ghwHLtTdJMghn3cdd7qap-yy0tKlUlIiZTAXi2V8kAkL7ObDI7vT4iXOGGhfW3mockFfZ3gLNlQvyros11qMgPNX93cga8M30GUPQBjxYckAfL~BqIBAW8SBLv50Xeyzt809itliN8PW~Ulgj5rZYpPxafhouNc6c5zlnY1FGySm-copNlV-a819p7FYcwKoiPug1mTD2kgc4Kc61Ikh7YmOjNlduhMJwKgkWShHPvMfSuJH7x-7IwCcwCvfg__"
                name="K-Swiss V8 - Masculino"
                price="$200"
                priceDiscount="$100"/>
            ))}
            
        </div>
        
    )
}


