import React from "react";
import Container from "./container"
import Corosoul from "./corosoual";
import Additional from "./additional"
import Spec_test from "./spec_Test";
import Second from "./second";
import About from "./aboutus";
import Contactus from "./contactus";

function App(){
    return(
        <div>
            <Container/>
            <Second/>
            <Corosoul/>
            <Additional/>
            <Spec_test/>
            <About/>
            <Contactus/>
        </div>
    );
}

export default App;