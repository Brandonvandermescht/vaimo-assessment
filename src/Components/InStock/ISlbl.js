import React, { useEffect, useState } from "react";
import axios from "axios";

function ISlbl() {
        
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    if(products && products.shipping.props.in_stock) {
        var stock = "In Stock"
    }
        return (
            <div className="islbl" >                
                {stock}             
            </div>
        )
    

    
}

export default ISlbl