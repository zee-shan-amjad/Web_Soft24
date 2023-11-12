
import {AiFillThunderbolt as Light} from 'react-icons/ai';
import {MdDashboardCustomize} from 'react-icons/md';
import {FaConnectdevelop} from 'react-icons/fa';
import {BsSafe2Fill} from 'react-icons/bs';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {RiCodeBoxLine} from 'react-icons/ri';


function Feature() {
    return (
        <div className="feature__container">
            
            <div className="feature__headings">

                <div className="feature__heading--secondary">
                    <p>

                    Quality Features
                    </p>
                </div>

                <div className="feature__heading--primary">
                    <h3>
                    What Differentiates Us From Others

                    </h3>
                </div>
            </div>

            <div className="feature__features">

                <div className="feature">
                    <div className="feature__left">
                    
                        <Light className="svg"/>

                    </div>

                    <div className="feature__right">
                        <div className="feature__title">
                            <h3>

                                Fast Performance
                            </h3>
                        </div>
                        <div className="feature__detail">
                            <p>
                                In modern web it is very crucial that applications load fast. We give heavy focus on performance and optimization of your application so that users have smooth experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature__left">
                    
                        <MdDashboardCustomize className="svg"/>

                    </div>

                    <div className="feature__right">
                        <div className="feature__title">
                            <h3>

                                Tailored To Business Needs
                            </h3>
                        </div>
                        <div className="feature__detail">
                            <p>
                                From choosing font styles to designing database schemas, we design and develop everything tailored to the business needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature__left">
                    
                        <FaConnectdevelop className="svg"/>

                    </div>

                    <div className="feature__right">
                        <div className="feature__title">
                            <h3>

                                Latest Technology Stack
                            </h3>
                        </div>
                        <div className="feature__detail">
                            <p>
                                From frontend to backend, we always thrive for new technologies. Our tech stack includes only those technologies that have been tested and known for there great performance. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature__left">
                    
                        <BsSafe2Fill className="svg"/>

                    </div>

                    <div className="feature__right">
                        <div className="feature__title">
                            <h3>

                                Secure
                            </h3>
                        </div>
                        <div className="feature__detail">
                            <p>
                                While building each feature of application, we keep our focus on any security issues that may arise. From keeping user's data save to preventing applications from malicious attacks, we cover everything.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature__left">
                    
                        <RiMoneyDollarCircleFill className="svg"/>

                    </div>

                    <div className="feature__right">
                        <div className="feature__title">
                            <h3>

                                Affordable
                            </h3>
                        </div>
                        <div className="feature__detail">
                            <p>
                                Although while creating your project we keep quality to the maximum however we also make sure that we provide quality work within your budget. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature">
                <div className="feature__left">
                
                    <RiCodeBoxLine className="svg"/>

                </div>

                <div className="feature__right">
                    <div className="feature__title">
                        <h3>

                            Clean Code written for humans
                        </h3>
                    </div>
                    <div className="feature__detail">
                        <p>
                            While develping we keep code as clean as possible. Also we create detailed documention so that later maintaining the website is as easy as it could be.
                        </p>
                    </div>
                </div>
            </div>
               
            </div>
        </div>
    )
}

export default Feature
