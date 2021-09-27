import React, { useEffect, useState } from "react";
import InfoIcon from './InfoIcon.png';

console.log(InfoIcon);

function ShippingTimeInfo() {
        //includes tooltip      
        return (
            <div title="Estimated Delivery Time is the time between your package shipped out of carriers’ warehouses and final destination delivery. Estimated delivery time does not include supplier manufacturing lead time, holidays and weekends.">                
                <img className="shippingtimeinfo" src={InfoIcon}/>                
            </div>
        )
       
}

export default ShippingTimeInfo