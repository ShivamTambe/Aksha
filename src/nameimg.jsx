import React from "react";

function Nameimg(props){
    return(
        <div className="nameimg">
             <img src={props.img} alt="" data-aos="zoom-out-down"/>
             <p>{props.name}</p>
         </div>
    );
}
export default Nameimg;