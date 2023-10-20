import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Quote.css"

const Quote = () => {
    return (
        <div class="last-container">
            <div class="col">
                <h5>Edubridgebd</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate natus quisquam vel distinctio eos ducimus, quod non velit fugiat dolores ab nihil odio exercitationem odit nulla. Quae, velit a. </h6>
                {/* <h6>How to place order? </h6>
                <h6>Track Order </h6>
                <h6>Return and Refund Policy</h6>
                <h6>Privacy Policy </h6>
                <h6>Replacement Policy </h6>
                <h6>Contact Us </h6> */}

            </div>
            <div class="col">
                <h5>Edubridgebd</h5>
                <h6>Edubridgebd Blog</h6>
                <h6>SiteMap </h6>
                <h6>Suggestions And Complains</h6>
                <h6>Instant Payment</h6>
            </div>
            <div class="col">

            </div>
            <div class="col">
                <h5>Newsletter</h5>
                <h5>Everyday more than 10 topices are added in </h5>
                <h5>edubridgebd.com To get new product update subscribe now.</h5>
                <div><input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" /></div>
                <div><button class="btn btn-block">Subscribe</button></div>
                <h5>Questions    Opinion    Complain </h5>
                <h5>Email: info@ajkerdeal.com</h5>
                <h5>Inbox: https://www.facebook.com/ajkercrazydeal</h5>
            </div>
        </div>

    );
};

export default Quote;