import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdName() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodname" >                
                {products && <div>{products.name}</div>}               
            </div>
        )
    

    
}

export default ProdName