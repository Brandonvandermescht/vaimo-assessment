import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptions3Price() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptions3price" >
                
                {products && <div>{products.options.battery_accessories.price.currency.symbol} {products.options.battery_accessories.price.value}</div>}            
                               
            </div>
        )
    

    
}

export default ProdOptions3Price