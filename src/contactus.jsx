import React from "react";

function Contactus(){
    return(
        <div className="contact" id="7th">
             <div className="ainfo" data-aos="flip-left">
                <div className="contacttitle">Contact Us</div>
                <div className="contactform">
                    <form action="/" method="post">
                        <input type="text" placeholder="Full Name" required/>
                        <input type="email" placeholder="Email" required/>
                        <input type="tel" placeholder="Moblie" required/>
                        <input type="text" placeholder="Organization" required/>
                        <textarea name="" id="" cols="20" rows="10"></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
            <div className="address">
                        <div className="addtitle">Address</div>
                        <div className="addinfo">Alacrity India Innovation Centre, Ideas to Impacts Building. Pallod Farm Lane 3, Near Vijay Sales, Baner Road, Pune - 411045</div>
                </div>
        </div>
    );
}

export default Contactus;