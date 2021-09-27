import React, { useEffect, useState } from "react";
import axios from "axios";

function ReadyToShip() {
        
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);
    
    if(products && products.shipping.props.ready_to_ship) {
        var ready = "Ready to Ship"
    }
        return (
            <div className="readytoship" >                
                {ready}             
            </div>
        )
    

    
}

export default ReadyToShip