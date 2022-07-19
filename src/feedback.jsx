import React from "react";
import Nameimg from "./nameimg";
import Experience from "./experience";

function Feedback(){
    return(
        <div className="application seclastb">
            {/* <div className="aimg">
                <div className="specification"></div>
            </div> */}
            <div className="ainfo feedbackinfo">
                <div className="info1 customer" data-aos="slide-left">Customer Testimonials</div>
                <div className="info2 lastb">
                    <div className="test test1">
                            <Nameimg
                                name="COO, Sharada Industries"
                                img="/imgs/SI_logo.png"
                            />
                            <Experience
                                exp=" Aksha has empowered our investments into the CCTV setup. Human monitoring efforts have reduced a lot. The ability to detect abnormal unforeseen events along with specific important entities without a lot of CAPEX is wonderful."
                            />
                    </div>
                    <div className="test test2">
                        <Experience
                            exp=" Aksha has given us a different outlook into how CCTV can be used. The ability to detect abnormal events and then highlighting them has been really useful. It has also been eye opening w.r.t. what all scenarios can be highlighted and avoided. We are looking forward to the new updates and innovations in the pipeline from Aksha."
                        />
                        <Nameimg
                            name="Partner, United Toolkits"
                            img="/imgs/united-industries-logo-90x90.jpg"
                        />
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Feedback;