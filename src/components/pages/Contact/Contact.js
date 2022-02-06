import React from 'react'
import emailjs from 'emailjs-com';
import { InlineWidget } from "react-calendly";

const Contact = () => {
  
  
  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm('service_61wbg5c', 'template_3tkf189', e.target, 'user_ynHz8Jx9tAQk5cmmYq8qZ')
      .then((result) => {
        alert("Thankyou for submitting your query. Team EncryptLabs will contact you further.")
      }, (error) => {
        console.log(error.text);
        alert(error.text)
      });
    e.target.reset()
  }



  return (
    <div className='mt-4 mb-4 container'>
      <div>
      <h2 className='text-center'>Schedule A Meet</h2>
      <br/>
       <InlineWidget url="https://calendly.com/dev_contact/strategic-call" />
      </div>
      <hr/>
      <div>
        <h2 className='text-center'>Mail Us</h2>
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
        <br/>
        <button className="btn btn-success btn-lg">Send Message</button>
      </form>
      <br/>
  </div>
  </div>
  );
};

export default Contact;