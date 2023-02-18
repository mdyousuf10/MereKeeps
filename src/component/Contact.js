import React from 'react'
import style1 from './style1.css'


export default function Contact() {
  return (
    <>
       <div className="container text-center">
       <h1 className='fs-1 fw-bold'>Contact Us</h1>
        <h5 className='text-justify'>
        At MereKeeps, we are committed to providing excellent customer service and support. If you have any questions, comments, or concerns, we would love to hear from you. Contact Us by filling your details and one of our Engineers will be in touch.
        </h5>
        <div className="container-fluid pb-5">
        <div className="row m-auto">
          <div className="col-md-6 mb-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8234384008633!2d75.32789221530234!3d19.88967603105873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb980e1908b535%3A0x6d4cb481438fbf5f!2sAY%20INFOTECH!5e0!3m2!1sen!2sin!4v1676731517613!5m2!1sen!2sin" style={{border:0, width:300, height:400}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-md-6 mb-5'>
           <form>
            <div className="form-group">
            <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" className="form-control" id="name1" placeholder="Name"/>
            </div>
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label htmlFor="message1">Message</label>
              <textarea className="form-control" name="Message" id="message1" cols="30" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-success my-2">Send Message</button>
          </form>
       </div>
        </div>
      </div>
      </div>
    </>
  )
}