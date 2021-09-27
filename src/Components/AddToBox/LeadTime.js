import React, { useEffect, useState } from "react";
import axios from "axios";

function LeadTime() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="leadtime" >
                
                {products && <div>Lead Time {products.shipping.lead_time.value}</div>}            
                               
            </div>
        )
    

    
}

export default LeadTime