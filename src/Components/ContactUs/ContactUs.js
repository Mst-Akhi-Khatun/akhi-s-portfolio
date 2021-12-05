import React from 'react';
import ContactForm from '../Home/ContactForm/ContactForm';
import Navbar from '../Home/Navbar/Navbar';
import './ContactUs.css';

const ContactUs = () => {

    const contactus = {
        paddingTop: "100px",
    }
    return (
        <div style={{ height: "100vh" }}>
            <Navbar></Navbar>
            <div style={contactus}>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;