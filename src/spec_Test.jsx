import React from "react";
import Feedback from "./feedback";

function Spec_test(){
    return(
        <div className="spec_test" id="5ht">
            <div className="specification">
                <div className="spectitle" data-aos="slide-left">
                    Technical Specifications
                </div>
                <div className="spcefic" data-aos="slide-right">
                    <ul>
                        <li>Smart frame based real time analysis</li>
                        <li>Scalable from 1 to 24 cameras</li>
                        <li>Object detection using yoloV4-tiny</li>
                        <li>Standards based: RTSP, HTTPS</li>
                        <li>Seamless integration with third party devices</li>
                    </ul>
                </div>
            </div>
            <div className="feedback">
                <Feedback/>
            </div>
        </div>
    );
}

export default Spec_test; 