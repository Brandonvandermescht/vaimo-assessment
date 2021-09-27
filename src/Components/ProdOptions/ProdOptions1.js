import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptions1() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptions1" >
                
                {products && <div>{products.options["1080p"].label}</div>}            
                               
            </div>
        )
    

    
}

export default ProdOptions1