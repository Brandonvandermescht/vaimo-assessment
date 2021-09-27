import React, { useEffect, useState } from "react";
import Moment from 'moment';
import axios from "axios";

function DiscountEndsTimer() {
       
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://fe-assignment.vaimo.net/');
        const data = await response.json();
        const item = data.product;
        setProducts(item);
    }, []);

var myfunc = setInterval(function() {
    
}, 1000)
//log the date given by the api and then minus the current date
var countDownDate = new Date(products && products.discount.end_date).getTime();
var now = new Date().getTime();
var timeleft = countDownDate - now;
//the following calculates the days, hours, minutes and seconds left until the countDownDate value    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
    Moment.locale('en');
  
        
        return (
            <div className="discountendstimer" >
                
                {Moment(days).format('DD')}d:{Moment(hours).format('HH')}h:{Moment(minutes).format('MM')}m:{Moment(seconds).format('SS')}s
                                                          
            </div>
        )
    

    
}

export default DiscountEndsTimer