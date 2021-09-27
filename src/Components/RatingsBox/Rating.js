import React, { useEffect, useState } from "react";
import axios from "axios";

function Rating() {
    
    const [count, setCount] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="rating" >
                
                {products && <div>{products.reviews.rating}</div>}

                
            </div>
        )
    

    
}

export default Rating