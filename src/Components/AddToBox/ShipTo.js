import React, { useEffect, useState } from "react";
import axios from "axios";

function ShipTo() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="shipto" >
                
                {products && <div>Ship to {products.shipping.method.country} by Express UPS Sav…</div>}            
                               
            </div>
        )
    

    
}

export default ShipTo