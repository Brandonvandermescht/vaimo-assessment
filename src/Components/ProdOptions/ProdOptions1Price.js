import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptions1Price() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptions1price" >
                
                {products && <div>{products.options["1080p"].old_price.currency.symbol} {products.options["1080p"].price.value}</div>}            
                               
            </div>
        )
    

    
}

export default ProdOptions1Price