import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// full stack
import img1 from '../../../image/lip.PNG';
import img2 from '../../../image/travily.PNG';
import img3 from '../../../image/doctor.PNG';




import { Link } from 'react-router-dom';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    return (
        <div className="container pt-5">
            <h1 className="text-center text-white my-5 " >MY RECENT PROJECTS</h1>
            <div className="card-deck pb-5">
                <div className="card img-hover-zoom">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Lip Care Lipstick Store</h5>
                        <Link to="/project"><button className="card-text custom-btn">See More</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://lip-care.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>

                <div className="card img-hover-zoom">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Travily Tour Planner</h5>
                        <Link to="/project"><button className="card-text custom-btn">See More</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://travily-tour-planner.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
                <div className="card img-hover-zoom">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Euro Medical Center</h5>
                        <Link to="/project"><button className="card-text custom-btn">See More</button></Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-danger"><a href="https://euro-medical-center.web.app/" target="_blank"><FontAwesomeIcon className="iconStyle" icon={faDotCircle} />View Site</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;