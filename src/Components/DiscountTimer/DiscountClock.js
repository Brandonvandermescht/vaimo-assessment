import React, { useEffect, useState } from "react";
import ClockIcon from './ClockIcon.png';

console.log(ClockIcon);

function DiscountClock() {

        return (
            <div>                
                <img className="discountclock" src={ClockIcon}/>            
            </div>
        )
    
}

export default DiscountClock