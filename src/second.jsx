import React from "react";
import { useState } from "react";

function Second(){
    

    const image = '/imgs/play.png';
    const visibility = 'visible2';


    const [images, setImages] = useState(image);
    const [visible, setVisible] = useState(visibility);

    function Showbtn(){
        setVisible('visible2');
        var videoObj = document.getElementById('videoplay');
        if (!videoObj.paused) {
            console.log("Video is playing");
            setImages('/imgs/pause.png');
        } else {
            console.log("Video is paused");
            setImages('/imgs/play.png');
        }
    }

    function Hidebtn(){
        var videoObj = document.getElementById('videoplay');
        if (!videoObj.paused) {
            setVisible('invisible');
        } else {
            setVisible('visible');
        }
    }



    function Play(){
        // document.getElementById('videoplay'));.play()
            var videoObj = document.getElementById('videoplay')
        // var videoObj = videojs("videoplay");

if (!videoObj.paused) {
    console.log("Video is playing");
    setImages('/imgs/play.png');
    videoObj.pause();

} else {
    console.log("Video is paused");
    setImages('/imgs/pause.png');
    videoObj.play();
}
    }
    return(
        <div className="second" id="secondd">
            <div className="video"  data-aos="slide-right"
                    onClick={Play} 
                    data-aos-easing="ease-in"
                    data-aos-mirror="true">
                        <div className="play" ><img src={images} alt="" id="playimg" className={visible} /> </div>
                <video src="/video/akash.mp4" onMouseEnter={Showbtn} onMouseLeave={Hidebtn}  id="videoplay"></video>
            </div>
            <div className="secinfo" data-aos="slide-left" 
                    data-aos-easing="ease-in"
                    data-aos-mirror="true"
            >
                <div className="sec1" >Manufacturing companies lose precious human lives and resources due to accidents and
security incidents, despite installing CCTV systems. Without active human monitoring
CCTV surveillance cannot detect or analyse unusual incidents in live video footage.</div>
                <div >Presenting Aksha, the intelligent video surveillance for manufacturing businesses.
Aksha guarantees Safety & Security of people and premises using the power of Artificial

Intelligence.</div>
            </div>
        </div>
    );
}

export default Second;