import React from "react";

function About() {
    return (
        <div className="about">
            <div className="invisi" id="6th"> </div>

            <div className="aboutimg" data-aos="flip-left" data-aos-offset="300">
                <img src="/imgs/Algoanalytics logo.png" alt="" />
            </div>
            <div className="aboutt"  >
                <div className="abouttitle" data-aos-offset="300" data-aos="slide-left">About Us</div>
                <div className="aboutinfo">
                    <div className="ainfo1" data-aos-offset="300" data-aos="slide-left">
                        Founded in 2016, AlgoAnalytics is one of the best organizations in India as far as applied machine learning expertise is concerned. We work at the intersection of mathematics, computer science and multiple domain expertise.
                    </div>
                    <div className="ainfo2" data-aos-offset="300" data-aos="slide-left">
                        At AlgoAnalytics, our team of experts, meet challenges in the field of ML and AI with a zeal and passion to find simple solutions. We integrate the cutting edge tools and technologies with our strong domain expertise to design predictive analytics solutions for businesses. We work across domains like manufacturing, healthcare, retail, finance and the legal. Our expertise covers text, image and video analytics.
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;