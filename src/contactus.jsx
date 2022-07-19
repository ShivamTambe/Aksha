import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Contactus(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [org, setOrg] = useState()
    const [message, setMessage] = useState()
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = "https://smtpjs.com/v3/smtp.js";
        script.async = true;
      
        document.body.appendChild(script);
      },[])
      
      const handleClick = (e) => {
        // e.preventDefault()
            if(name && email && phone && org && message){
                //eslint-disable-next-line
                Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "g.a.b.r.i.ellkjam.al.e@gmail.com",
                    Password : "5CFB8495FC21EFEDAD52CF5DFD201D1DF24D",
                    To : "shivamtambe545@gmail.com",
                    From : "g.a.b.r.i.ellkjam.al.e@gmail.com",
                    Subject : `Received Your Message`,
                    Body : `Hey ${email} thanks for Feedbacking with us we will be looking into your response shortly.`
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))
            }
      }

    return(
        <div className="contact" id="7th">
             <div className="ainfo" data-aos="flip-left">
                <div className="contacttitle">Contact Us</div>
                <div className="contactform">
                    <form>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" required/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required/>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Moblie" required/>
                        <input value={org} onChange={(e) => setOrg(e.target.value)} type="text" placeholder="Organization" required/>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="20" rows="10"></textarea>
                        <button onClick={handleClick}  className="btn">Submit</button>
                    </form>
                </div>
            </div>
            <div className="address">
                        <div className="addtitle">Address</div>
                        <div className="addinfo">Alacrity India Innovation Centre, Ideas to Impacts Building. Pallod Farm Lane 3, Near Vijay Sales, Baner Road, Pune - 411045</div>
                </div>
        </div>
    );
}

export default Contactus;