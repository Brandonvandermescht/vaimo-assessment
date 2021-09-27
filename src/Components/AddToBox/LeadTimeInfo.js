import React, { useEffect, useState } from "react";
import InfoIcon from './InfoIcon.png';

console.log(InfoIcon);

function LeadTimeInfo() {
        //includes tooltip
        return (
            <div title="After payment is complete, your order will ship within">            
                <img className="leadtimeinfo" src={InfoIcon}/>                
            </div>
        )
        
}

export default LeadTimeInfo