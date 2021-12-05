import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons';

import emailjs from 'emailjs-com';



const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xcqmp4c', e.target, 'user_qjifYZv9EWZnfa7uCwRqQ')

            .then((result) => {
                console.log(result.text);
                alert('your message has been submitted')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <div className="container pt-5">
            <h1 className="text-uppercase mt-5 custom-txt-clr text-center">Get in Touch</h1>
            <p className="text-white pb-5 contactme-txt text-center" style={{ textAlign: 'justify' }}>Kindly fulfill the form below for any queries or to discuss about any development project. I will be very happy to assist you.</p>
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-uppercase text-white">Contact Form</h2>
                    <form className="contact-form pb-5 mt-3" onSubmit={sendEmail}>
                        <input className="form-control" placeholder="Your Name" type="text" name="user_name" />
                        <input className="form-control my-3" placeholder="Your Email" type="email" name="user_email" />
                        <textarea rows='6' col='12' className="form-control" placeholder="Your Massage" name="message" />
                        <br />
                        <input className="form-control custom-btn" type="submit" value="Send" />
                    </form>
                </div>
                <div className="col-md-6 text-white">
                    <p className="pt-5 contactme-txt text-center" style={{ textAlign: 'justify' }}>Please feel free to contact me if you need any further information. Give it a try! You won't be disappointed.</p>
                </div>
                <h6 className="mx-auto mb-3 text-white">Copyright &copy; All rights reserved.</h6>
            </div>
        </div>
    );
};

export default ContactForm;