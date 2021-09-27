import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdOptionsNum1() {
        
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    
        return (
            <div className="prodoptionsnum1" >                                               
            </div>
        )
    

    
}

export default ProdOptionsNum1