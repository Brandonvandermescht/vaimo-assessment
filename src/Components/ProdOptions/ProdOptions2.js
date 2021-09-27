import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptions2() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptions2" >
                
                {products && <div>{products.options["4k"].label}</div>}            
                               
            </div>
        )
    

    
}

export default ProdOptions2