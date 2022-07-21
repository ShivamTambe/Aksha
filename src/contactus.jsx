import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Contactus(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [org, setOrg] = useState()
    const [message, setMessage] = useState()
    const [contact, setContact] = useState()


    function Comedy(){
        setContact("contactmsg"); 
        setInterval(()=>{
            window.location.reload ();
        }, 1000)
    }
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
                    Body : `Name : ${name},  Email : ${email}, Phone No. : ${phone}, Organization : ${org}, Message : ${message}`
                }) 
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err))
            }
      }

    return(
        <div className="contact" >
            <div className="invisi" id="7th"> </div>
             <div className="ainfo" data-aos="slide-right" data-aos-duration="8000">
                <div className="contacttitle">Contact Us</div>
                <div className="continfo" id={contact} >Thank you for your message. We will reach out to you shortly.</div>
                <div className="contactform">
                    <form>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name *" required className="required"/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email *" required className="required"/>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Moblie *" required className="required"/>
                        <input value={org} onChange={(e) => setOrg(e.target.value)} type="text" placeholder="Organization *" required className="required"/>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" placeholder="Your Massage" id="" cols="20" rows="10"></textarea>
                        <button  onClick={() => { handleClick(); Comedy();}} className="btn">Submit</button>
                        {/* <div className="contactmsgg" onClick={Comedy}>HELLO</div> */}
                    </form>
                </div>
            </div>
            <div className="address" data-aos="slide-left">
                        <div className="addtitle">Address</div>
                        <div className="addinfo">Alacrity India Innovation Centre, Ideas to Impacts Building. Pallod Farm Lane 3, Near Vijay Sales, Baner Road, Pune - 411045</div>
                </div>
        </div>
    );
}

export default Contactus;