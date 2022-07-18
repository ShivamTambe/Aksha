import React, { useState} from "react";
import './App.css';

function Corosoul(){

    const visibility_initial = "notvisible"
    const [visiblee, setVisible] = useState(visibility_initial);
    function Show(){
        console.log("Clicked");
        const visibility = "visible";
        setVisible(visibility);
    }
    function Console(){
        console.log("hey");
    }
    function Invisible(){
        console.log("hey")
            const invisible = "visible";
            setVisible(invisible);
    }
    return(
        <div className="corosoul" id="3rd">
            <div className="show" id={visiblee}><div className="hidee" onClick={Invisible}>Hide</div> 
            </div>
            <h1 className="key" onClick={Console}>FEATURES</h1>
            <div className="slides customer-logos slider">
                    <div className="slide" onClick={Show}>
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/Activity_ Movement tracking.png" alt="" />
                    </div>
                    <div className="slide" onClick={Show} >
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/Object detection.png" alt="" />
                    </div>
                    <div className="slide" onClick={Show}>
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/Real time alerts.png" alt="" />
                    </div>
                    <div className="slide" onClick={Show}>
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/Unusual activity (anomaly) detection .png" alt="" />
                    </div>
                    <div className="slide" onClick={Show}>
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/User defined alerts.png" alt="" />
                    </div>
                    <div className="slide" onClick={Show}>
                        <div className="keytitle">Activity/Movement tracking</div>
                        <img src="/imgs/Email Notification.png" alt="" />
                    </div>


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