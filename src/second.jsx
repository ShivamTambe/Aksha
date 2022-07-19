import React from "react";

function Second(){
    return(
        <div className="second" id="secondd">
            <div className="video"  data-aos="slide-right" 
                    data-aos-easing="ease-in"
                    data-aos-mirror="true">
                <video src="/video/akash.mp4" controls></video>
            </div>
            <div className="secinfo" data-aos="slide-left" 
                    data-aos-easing="ease-in"
                    data-aos-mirror="true"
            >
                <div className="sec1" >Manufacturing companies lose precious human lives and resources due to accidents and
security incidents, despite installing CCTV systems. Without active human monitoring
CCTV surveillance cannot detect or analyse unusual incidents in live video footage.</div>
                <div>Presenting Aksha, the intelligent video surveillance for manufacturing businesses.
Aksha guarantees Safety & Security of people and premises using the power of Artificial

Intelligence.</div>
            </div>
        </div>
    );
}

export default Second;