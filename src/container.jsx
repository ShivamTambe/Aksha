import React from "react";

function Container(){
    return(
        <div className="container" id="home">
            <div className="nav">
                    <div className="logot">अक्ष</div>
                <div className="navbtns">
                    <a href="#home" ><div className="navbtn">Home</div></a>
                    <a href="#3rd" ><div className="navbtn" >Features</div></a>
                    <a href="#44th"><div className="navbtn" >Applications</div></a>
                    <a href="#6th" ><div className="navbtn" >About Us</div></a>
                    <a href="#7th" ><div className="navbtn" >Contact Us</div></a>
                </div>
            </div>
            <div className="logoimg"><img src="/imgs/aksha_logo.png" alt="" /></div>
            <div className="pg1">
                <div className="text1">
                   <div className="aksha" data-aos="slide-left" data-aos-duration="800" data-aos-easing="ease-in-out">AKSHA</div>
                   <div className="adis" data-aos="slide-right" data-aos-duration="800">AI-powered Video surveillance solution</div>
                </div>
                <div className="pg1img" data-aos="fade-up" data-aos-duration="1000"><img src="/imgs/2.jpg" alt="" srcset="" /></div>
            </div>
        </div>
    );
}

export default Container;