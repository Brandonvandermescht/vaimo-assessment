import React, { useEffect, useState } from "react";
import axios from "axios";

function HSPlbl() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="hsplbl" >
                
                {products && <div>{products.tags[0]}</div>}

                
            </div>
        )
    

    
}

export default HSPlbl