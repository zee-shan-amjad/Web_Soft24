import React from 'react';
import ArrowEven from './icons/ArrowEven';
import ArrowOdd from './icons/ArrowOdd';

function Process() {

    
    return (
        <div id="process" className="process">

            <div className="process__heading">
                <div className="process__heading--secondary">
                    <p>
                        Our Process
                    </p>
                </div>

                <div className="process__heading--primary">
                    <h3>
                        How do we Convert Your Amazing Ideas Into Reality
                    </h3>
                </div>
            </div>

            <div className="process__container">


                
                <div className="process__single">

                    <div className="process__num">
                        <h3>01</h3>
                    </div>
                    <div className="svg svd--odd">
                        <ArrowOdd></ArrowOdd>
                    </div>

                    <div className="process__title">
                        <h4>
                            Content
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Once we have understood your idea, we start creating the content tailored to your app. This includes images, videos, illustrations etc.
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>02</h3>
                    </div>

                    <div className="svg svg--even">
                        <ArrowEven ></ArrowEven>
                    </div>

                    <div className="process__title">
                        <h4>
                            Design
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Next we create beautiful design for your application that reflect your business. This includes layouts, color schemes, animations etc. Ofcourse all of our designs are mobile responsive.
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>03</h3>
                    </div>

                    <div className="svg svg--odd">
                        <ArrowOdd></ArrowOdd>
                    </div>

                    <div className="process__title">
                        <h4>
                            Development
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Coding, Coding and lots of coding. 
                        </p>
                    </div>
                </div>

                <div className="process__single">

                    <div className="process__num">
                        <h3>04</h3>
                    </div>

                    <div className="process__title">
                        <h4>
                            Deployment
                        </h4>
                    </div>

                    <div className="process__paragraph">
                        <p>
                            Finally we launch your website. We use industry leaders for this step as well such as Heroku, Digital Ocean and AWS so that your applications scale to the sky without hitting your budget.
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Process
/*
 <svg>
                        <use href="./icons/arrowEven.svg"></use>
                    </svg>
*/