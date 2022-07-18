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
                                img="https://aksha.algoanalytics.com/images/alert31.png"
                            />
                            <Experience
                                exp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam, maiores consequuntur repellendus eaque eum dolores nulla nesciunt ratione, voluptatum eveniet aliquid, neque explicabo iure dolor aut adipisci sapiente obcaecati. "
                            />
                    </div>
                    <div className="test test2">
                        <Experience
                            exp=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam, maiores consequuntur repellendus eaque eum dolores nulla nesciunt ratione, voluptatum eveniet aliquid, neque explicabo iure dolor aut adipisci sapiente obcaecati. "
                        />
                        <Nameimg
                            name="COO, Sharada Industries"
                            img="https://aksha.algoanalytics.com/images/alert31.png"
                        />
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Feedback;