import React from 'react';
import './AnimateContent.css';
import brandLogo from "../../../image/akhi.png";
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'


const AnimateContent = () => {
    return (
        <div className=" animateStyle">
            <div>
                <figure className="text-center mt-5">
                    <img className="img-fluid myProfile" style={{ height: "300px", width: "300px", borderRadius: "50%" }} src={brandLogo} alt="img" />
                </figure>
            </div>
            <h1 className="text-white text-center textH1">I AM <span style={{ color: "#fe0da7" }}>MST. AKHI KHATUN</span></h1>
            <div className="d-flex justify-content-center align-items-center">

                <h3 className="text-white">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Mern Stack Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'React Developer',
                            1000,
                        ]}

                    />
                </h3>
            </div>

            <div className="text-white d-flex justify-content-center mt-5 icons">
                <a href="https://www.facebook.com/akhikhatun7732" target="-blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/akhikhatun7732/?midToken=AQErqIlIK0LQPA&midSig=24ScHQ4Y0kDq01&trk=eml-email_network_conversations_01-header-70-profile&trkEmail=eml-email_network_conversations_01-header-70-profile-null-esc4iu%7Ekwkosx9v%7Ed2-null-neptune%2Fprofile%7Evanity%2Eview" target="-blank"><FontAwesomeIcon className="mx-5" icon={faLinkedinIn} /></a>
                <a href="https://github.com/Mst-Akhi-Khatun" target="-blank"><FontAwesomeIcon icon={faGithub} /></a>


            </div>
        </div>
    );
};

export default AnimateContent;


