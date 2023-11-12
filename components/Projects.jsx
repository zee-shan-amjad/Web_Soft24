import React from 'react'
import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai';

function Projects() {
    return (
        <div id="projects" className="projects">

            <div className="projects__heading">
                <div className="projects__heading--secondary">
                    <p>
                        Our Projects
                    </p>
                </div>

                <div className="projects__heading--primary">
                    <h3>
                        Some of Our Recent Projects
                    </h3>
                </div>
            </div>

            <div className="projects__container">


                <div className="projects__container--left">

                    <h2 className="project__title">
                    Tour de Pakistan
                    </h2>

                    <p className="project__description">
                    Tour de Pakistan is a new startup that arranges beautiful and adventurous tours. There tours are specifically tailored for the foreign tours.
                    </p>

                    <div className="project__stack">

                        <div className="project__stack--title">
                            <h3>

                            Stack used for this project:
                            </h3>
                        </div>
                        <ul>
                            <li>
                                <div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div>
                                <p>Javascript</p>
                            </li>
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>React</p></li>
                           
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Nextjs</p></li>
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Sass</p></li>
                                <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Nodejs</p></li>
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Mongodb (mongoose)</p></li>
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>JWT Authentication</p></li>
                            <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Stripe Payment</p></li>
                                <li><div className="icon">
                                    <AiOutlineRight size={13} className="icon_right"/>
                                </div><p>Mapbox</p></li>

                        </ul>
                    </div>

                    <div className="preview_btn-container">
                        <Link href="https://clever-galileo-08ba26.netlify.app">
                        
                            <a className='preview_btn'>Live Preview</a>
                        </Link>
                    </div>
                </div>

                <div className="projects__container--right">
                    
                    <div className="project__images--heading">
                        <h3>Image Preview</h3>
                    </div>

                    <div className="project__images--container">
                        
                        <div className="image">
                            <img src="/projects/project-1-1.jpg" alt="tour project image 1" />
                        </div>
                        <div className="image">
                            <img src="/projects/project-1-2.jpg" alt="tour project image 2" />
                        </div>
                        <div className="image">
                            <img src="/projects/project-1-3.jpg" alt="tour project image 3" />
                        </div>
                        <div className="image">
                            <img src="/projects/project-1-4.jpg" alt="tour project image 4" />
                        </div>
                        <div className="image">
                            <img src="/projects/project-1-2.jpg" alt="tour project image 5" />
                        </div>
                    </div>
                </div>
               
                
            </div>

        </div>
    )
}

export default Projects
