import React, { useEffect, useState } from "react";
import axios from "axios";

function ATBPrice() {
    
    const [count, setCount] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="atbprice" >
                
                {products && <div>{products.shipping.method.cost.currency.symbol} {products.shipping.method.cost.value}</div>}            
                               
            </div>
        )
    

    
}

export default ATBPrice