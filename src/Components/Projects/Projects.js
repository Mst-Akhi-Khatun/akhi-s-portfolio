import React from "react";
import './Projects.css';

import lip1 from '../../image/Lip-images/lip-1.PNG';
import lip2 from '../../image/Lip-images/lip-2.PNG';
import lip3 from '../../image/Lip-images/lip-2.PNG';

import travily1 from '../../image/Travily-images/travily-1.PNG';
import travily2 from '../../image/Travily-images/travily-2.PNG';
import travily3 from '../../image/Travily-images/travily-3.PNG';


import doctor1 from '../../image/Doctor-images/doctor-1.PNG';
import doctor2 from '../../image/Doctor-images/doctor-2.PNG';
import doctor3 from '../../image/Doctor-images/doctor-3.PNG';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => {

    return (
        <div className="Projects text-white">
            <h1 className="text-center mt-5 pt-5" >PROJECTS DETAILS</h1>
            <div className="my-5 ml-5">
                <h2 className="">(i) Lip Care Shop – Product selling related website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={lip1} alt="" /></Slide>
                            <Slide index={0}><img src={lip2} alt="" /></Slide>
                            <Slide index={1}><img src={lip3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    <li>
                        Have an admin and user dashboard. An admin can add, delete, and manage products.
                    </li>
                    <li>
                        Admin can give access as an admin to anyone with email.
                    </li>
                    <li>
                        Users have an option to give their reviews.
                    </li>
                    <li>
                        I use mongodb for storing data.
                    </li>
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://lip-care.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/Mst-Akhi-Khatun/Lip-care-client">Client Side</a>
                    ||
                    <a href="https://github.com/Mst-Akhi-Khatun/Lip-care-server">Server Side</a>
                </h5>
            </div>



            <div className="my-5 ml-5">
                <h2 className="">(ii) Travily Tour Planner – A travel agency related website (Mern Stack)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={travily1} alt="" /></Slide>
                            <Slide index={0}><img src={travily2} alt="" /></Slide>
                            <Slide index={1}><img src={travily3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    <li>
                        A complete responsive travel agency website where a user can book any tour plan.
                    </li>
                    <li>
                        A logged-in user can manage his/her bookings also other bookings.
                    </li>
                    <li>
                        Logged-in users have an option to add new tour plans.
                    </li>
                    <li>
                        I use mongodb for storing data.
                    </li>
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Node.js, Express.js, MongoDB, Firebase, Heroku, Bootstrap5, React Bootstrap,Css, Html</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://travily-tour-planner.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/Mst-Akhi-Khatun/Travily-tour-planner-client">Client Side</a>
                    ||
                    <a href="https://github.com/Mst-Akhi-Khatun/Travily-pour-planner-server">Server Side</a>
                </h5>
            </div>
            <div className="my-5 ml-5">
                <h2 className="">(iii) Euro Medical Center – Health care related website (Frontend)</h2>
            </div>
            <div id="work" className="carousel_parent">
                <div className="container">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={40}
                        totalSlides={3}
                    >
                        <Slider className="carouselImg">
                            <Slide index={0}><img src={doctor1} alt="" /></Slide>
                            <Slide index={0}><img src={doctor2} alt="" /></Slide>
                            <Slide index={1}><img src={doctor3} alt="" /></Slide>
                        </Slider>
                        <div className="d-flex justify-content-center  mt-5 pb-5">
                            <div className="carouselBtn bg-dark">
                                <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
                                <ButtonNext className="btn btn-primary">Next</ButtonNext>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            <h2 className="ml-5 mt-2">Project Overview</h2>
            <div className="ml-5 mb-5 pb-5">
                <h5>Features:</h5>
                <ul>
                    <li>
                        A medical center website where a user can see detail info about a treatment.
                    </li>
                    <li>
                        Some routes are private. Only logged-in users have the access to visit.
                    </li>
                    <li>
                        Two types of login or signup methods are implemented.
                    </li>
                    <li>
                        I use some css library to make the site responsive and add some animations
                    </li>
                    <li>
                        I use firebase for user authentication.
                    </li>
                </ul>
                <h5 className="mt-3">
                    Technology Used:
                </h5>
                <h6 className="fw-normal">React.js, Firebase, Bootstrap5, React Bootstrap, Css, Html.</h6>
                <h5 className="mt-3">
                    Previews:
                    <a href="https://euro-medical-center.web.app/">Live Site</a>
                    ||
                    <a href="https://github.com/Mst-Akhi-Khatun/euro-medical-center">Client Side</a>
                </h5>
            </div>
        </div>

    );
};

export default Projects;