import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptions3() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptions3" >
                
                {products && <div>{products.options.battery_accessories.label}</div>}            
                               
            </div>
        )
    

    
}

export default ProdOptions3