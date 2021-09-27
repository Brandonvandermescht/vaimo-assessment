import React, { useEffect, useState } from "react";
import axios from "axios";

function ShippingTime() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="shippingtime" >
                
                {products && <div>Shipping time {products.shipping.method.shipping_time.value}</div>}            
                               
            </div>
        )
    

    
}

export default ShippingTime