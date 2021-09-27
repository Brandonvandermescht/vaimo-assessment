import React, { useEffect, useState } from "react";
import axios from "axios";

function FDlbl() {
        
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    if(products && products.shipping.props.fast_dispatch) {
        var fast = "Fast Dispatch"
    }
        return (
            <div className="fdlbl" >                
                {fast}            
            </div>
        )
    

    
}

export default FDlbl