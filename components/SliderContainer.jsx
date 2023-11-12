
//import Testimonial from './Testimonial';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

import React from 'react'
import Image from 'next/image';
import Rating from './Rating'

import Avatar1 from './images/avatar1.png';
import Avatar2 from './images/avatar2.png';
import Avatar3 from './images/avatar3.png';
import Avatar4 from './images/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },

  {
    id: 5,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 6,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 7,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 8,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
];



const settings = {
    //infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function SliderContainer() {

    return (
        <div className="slider" id='slideSection'>

          <div className="heading">
            <div className="heading__secondary">
              <p>

              Testimonial
              </p>
            </div>

            <div className="heading__primary">
              <h3>

              Our Moto Is 100% Client Satisfaction
              </h3>
            </div>
          </div>
            
            <Slider {...settings}>
                {data.map((testimonial) => {
                    return (

                    <div className='testimonial__card' key={testimonial.id}>

                        <div className="testimonial__card--container">

                        <Rating rating = {testimonial.review}></Rating>
                        <div className="review__title">
                            <h3>{testimonial.title}</h3>
                        </div>

                        <div className="review__description">
                            <p>{testimonial.description}</p>
                        </div>

                        <div className="user">
                            <div className="user__img">
                                <Image src={testimonial.avatar} alt='image of reviewer'></Image>
                            </div>

                            <div className="user__info">

                              <div className="name">
                                <h3>
                                  {testimonial.name}
                                </h3>
                              </div>

                              <div className="designation">
                                <h3>
                                  {testimonial.designation}
                                </h3>
                              </div>
                              
                            </div>

                        </div>
                        </div>


                    </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default SliderContainer
/*
<Testimonial></Testimonial>
*/