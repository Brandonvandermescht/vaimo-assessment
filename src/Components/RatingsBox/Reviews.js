import React, { useEffect, useState } from "react";
import axios from "axios";

function Reviews() {
    
    const [count, setCount] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="reviews" >
                
                {products && <div>{products.reviews.count} Reviews</div>}

                
            </div>
        )
    

    
}

export default Reviews