import React from "react";
import emailjs from'emailjs-com'
import './Contact.css';
function Contact(){

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_goodcg8', e.target, 'mhNvP8gYAYwuigxrb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        
        <>
        
        <div className="big1">
        <div className="whole2">
        <h1 className="title">Contact us</h1>
            <form className="form" onSubmit={sendEmail}>
                <label>Full Name</label>
                <input type={"text"} placeholder="Full Name" className="input1" name="name"></input>
                <label>Email</label>
                <input type={"email"} placeholder="Email" className="input1" name="email"></input>
                <label>Subject</label> 
                <input type={"text"}placeholder="Subject" className="input1" name="subject"></input>
                <label>Massage</label>
                <input type={"text"} placeholder="massage" className="input1" name="message"></input>
                <button>Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Contact;