import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  
  
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm('service_0kyylwg', 'template_twmkv8e', e.target, 'user_25jaO7IzwlfETtIAXJHLG')
      .then((result) => {
        alert("Thankyou for submitting your query. Team Dikshita will contact you further.")
      }, (error) => {
        console.log(error.text);
        alert(error.text)
      });
    e.target.reset()
  }



  return (
    <div className="mt-4 mb-4">
      <br />
      <br/>
      <div className="container">
        <form onSubmit={sendEmail}>
        <div className="mb-3">
         <label className="form-label col-form-label-lg">Name</label>
         <input type="text" required name="name" className="form-control" />
        </div>
        <div className="mb-3">
        <label className="form-label col-form-label-lg">Email</label>
        <input type="email" required name="email" className="form-control" />
        </div>
       <div className="mb-3">
        <label className="form-label col-form-label-lg">Subject</label>
        <input type="text" className="form-control" required name="subject"/>
       </div>
       <div className="mb-3">
        <label className="form-label col-form-label-lg">Message</label>
        <textarea type="text" rows="4" cols="50" className="form-control" name="message" required />
        </div>
        <hr />
        <br/>
        <button className="btn btn-success btn-lg">Send Message</button>
      </form>
      </div>
     <br/>
  </div>
  );
};

export default Contact;