import React, { useState} from "react";
import './App.css';


function Corosoul(){
    const visibility_initial = "invisible";
    const title_initial = "Activity";
    const imgSource_initial = "kahitari";
    const show_initial = " ";

    const [visiblee, setVisible] = useState(visibility_initial);
    const [title, settitle] = useState(title_initial);
    const [imgsource, setImgSource] = useState(imgSource_initial);
    const [showstyle, setShowStyle] = useState(show_initial);


    function Show(e){
        console.log("Clicked");
        const visibility = "visible";
        setShowStyle('showtitle');
        setVisible(visibility);
        const imgsourcee = e.currentTarget.title;
        console.log(imgsourcee);
        let id;
        if(imgsourcee === "/imgs/Activity_ Movement tracking.png" ){
            settitle('Activity/Movement Tracking');
        }
        else{
            if(imgsourcee ==='/imgs/Object detection.png'){
                settitle('Object Detection');
            }
            else{
                if(imgsourcee ==='/imgs/Real time alerts.png'){
                    settitle('Real Time Alerts');
                }
                else{
                    if(imgsourcee ==='/imgs/Unusual activity (anomaly) detection .png'){
                        settitle('Unusual Activity Detection');
                    }
                    else{
                        if(imgsourcee ==='/imgs/User defined alerts.png'){
                            settitle('User Defined Alert');
                        }
                        else{
                            if(imgsourcee ==='/imgs/24x7 monitoring.png'){
                                settitle('24x7 Monitoring');
                            }
                        }
                    }
                }
            }
        }

        setImgSource(imgsourcee);
    }
    function noscroll(){
        window.scrollTo(0,0);
    }
    function Console(){
        console.log("hey");
    }
    function Invisible(){
        console.log("hey")

            // const invisible = "invisible";
            // setVisible(invisible);
            window.location.reload ();
    }
    return(
        <div className="corosoul">
           
            <div className="invisi" id="3rd"> </div>
            <div className="show" id={visiblee} onScroll={noscroll}>
                <div className="hidee" onClick={Invisible}></div>
                <div className="clicked_slide" onClick={Show}>
                        <div className="keytitle" id={showstyle} >{title}</div>
                        <img src={imgsource} alt="" />
                </div> 
            </div>
            <h1 className="key" onClick={Console} data-aos="fade-up">FEATURES</h1>
            <div className="slides customer-logos slider">
                <a href='#visible'>
                    <div className="slide" data-aos="fade-up" data-aos-delay="150"
                        title={'/imgs/Activity_ Movement tracking.png'}
                        onClick={Show}
                    >
                        <div className="keytitle">Activity/Movement Tracking</div>
                        <img src="/imgs/Activity_ Movement tracking.png" alt="" />
                    </div>
                </a>
                <a href="#visible">
                    <div className="slide"  data-aos="fade-up" data-aos-delay="150"
                        onClick={Show} 
                        title={'/imgs/Object detection.png'}
                    >
                        <div className="keytitle">Object Detection</div>
                        <img src="/imgs/Object detection.png" alt="" />
                    </div>
                </a>
                <a href="#visible">
                    <div className="slide" data-aos="fade-up" data-aos-delay="150"
                    title={'/imgs/Real time alerts.png'}
                    onClick={Show}
                    >

                        <div className="keytitle">Real Time Alerts</div>
                        <img src="/imgs/Real time alerts.png" alt="" />
                    </div>
                </a>
                <a href="#visible">
                    <div className="slide" onClick={Show} data-aos="fade-up" data-aos-delay="150"
                    title={'/imgs/Unusual activity (anomaly) detection .png'}
                    >
                        <div className="keytitle">Unusual Activity Detection</div>
                        <img src="/imgs/Unusual activity (anomaly) detection .png" alt="" />
                    </div>
                </a>
                <a href="#visible">
                    <div className="slide" onClick={Show} data-aos="fade-up" data-aos-delay="150"
                    title={'/imgs/User defined alerts.png'}
                    >
                        <div className="keytitle">User Defined Alerts</div>
                        <img src="/imgs/User defined alerts.png" alt="" />
                    </div>
                </a>
                <a href="#visible">
                    <div className="slide" onClick={Show} data-aos="fade-up" data-aos-delay="150"
                    title={'/imgs/24x7 monitoring.png'}
                    >
                        <div className="keytitle">24x7 Monitoring</div>
                        <img src="/imgs/24x7 monitoring.png" alt="" />
                    </div>
                </a>


{/*                         
                    <div className="slide"><img src="/imgs/Activity_ Movement tracking.png" alt="" /></div>
                    <div className="slide"><img src="/imgs/Object detection.png" alt="" /></div>
                    <div className="slide"><img src="/imgs/Real time alerts.png" alt="" /></div>
                    <div className="slide"><img src="/imgs/Unusual activity (anomaly) detection .png" alt="" /></div>
                    <div className="slide"><img src="/imgs/User defined alerts.png" alt="" /></div>
                    <div className="slide"><img src="/imgs/Email Notification.png" alt="" /></div> */}
            </div>  
        </div>
    );
}

export default Corosoul;