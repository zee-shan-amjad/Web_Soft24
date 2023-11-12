import {useState, useEffect} from 'react';


import Link from 'next/link';

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    console.log(mobileMenuOpen)
    const mobileNavClasses = mobileMenuOpen ? "mobile__menu__background mobile__menu__active" : "mobile__menu__background"
    useEffect(() => {

        window.addEventListener("resize", mobileMenuSet)
        //return () => window.removeEventListener("resize");
    }, [])


    const mobileMenuSet = (e) => {
        if (e.target.innerWidth > 884) setMobileMenuOpen(false)
    }

    const linkHandler = (e) => {
        if(e.target.id === 'navprocess_link' || 'navproject_link' || 'navteam_link' || 'navreview_link' || 'navhire_btn') {
            setMobileMenuOpen(false)
        }
        const processSection = document.querySelector('#process')
        const projectSection = document.querySelector('#projects')
        const contactSection = document.querySelector('#contact')
        const teamSection = document.querySelector('#team')
        const headSection = document.querySelector('#head')
        const sliderSection = document.querySelector('#slideSection')


        const processCords = processSection.getBoundingClientRect();
        const projectCords = projectSection.getBoundingClientRect();
        const contactCords = contactSection.getBoundingClientRect();
        const headCords = headSection.getBoundingClientRect();
        const teamCords = teamSection.getBoundingClientRect();
        const sliderCords = sliderSection.getBoundingClientRect();

        if (e.target.id === 'review_link' || e.target.id === 'navreview_link') window.scrollTo({left: sliderCords.left, top: sliderCords.top + window.pageYOffset, behavior: "smooth"})
        
        if (e.target.id === 'process_link' || e.target.id === 'navprocess_link') window.scrollTo({left: processCords.left, top: processCords.top + window.pageYOffset, behavior: "smooth"})

        if (e.target.id === 'projects_link' || e.target.id === 'navproject_link') window.scrollTo({left: projectCords.left, top: projectCords.top + window.pageYOffset, behavior: "smooth"})

        if (e.target.id === 'team_link' || e.target.id === 'navteam_link') window.scrollTo({left: teamCords.left, top: teamCords.top + window.pageYOffset, behavior: "smooth"})

        if (e.target.id === 'hire_btn' || e.target.id === 'navhire_btn') window.scrollTo({left: contactCords.left, top: contactCords.top + window.pageYOffset, behavior: "smooth"})
    }
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="nav__logo">
                        <Link href="/">
                            <a><img src="/logo/logo.png" alt="Web Soft logo" /></a>
                        </Link>
                    </div>

                    <div className="nav__link">

                        <div className="nav__link__container">
                            
                            <li className="link" id='process_link' onClick={(e) => linkHandler(e)}>Our Process</li>
                            <li className="link" id="projects_link" onClick={(e) => linkHandler(e)}>Our Projects</li>
                            <li className="link" id="team_link"onClick={(e) => linkHandler(e)}>Our Team</li>
                            <li className="link" id="review_link" onClick={(e) => linkHandler(e)}>Client Reviews</li>
                        </div>
                    </div>

                    <div className="nav__btn" >
                        <button id='hire_btn' onClick={(e) => linkHandler(e)}>
                            <p id='hire_btn' onClick={(e) => linkHandler(e)}>
                                Hire me
                            </p>
                        </button>
                    </div>

                    <div className="nav__burger" onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__upper" : "nav__burger__line"} ></div>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__middle" : "nav__burger__line"}></div>
                        <div className={mobileMenuOpen? "nav__burger__line nav__burger__bottom" : "nav__burger__line"}></div>
                    </div>
                </div>
            </div>

            <div className={mobileNavClasses}>

            </div>

            <div className={mobileMenuOpen? "mobile__menu__links-active mobile__menu__links" : "mobile__menu__links"}>
                <ul className="links__container">
                    
                    <li className="link" id="navprocess_link" onClick={(e) => linkHandler(e)}>Our Process</li>
                    <li className="link" id="navproject_link" onClick={(e) => linkHandler(e)}>Our Project</li>
                    <li className="link" id="navteam_link" onClick={(e) => linkHandler(e)}>Our Team</li>
                    <li className="link" id="navreview_link" onClick={(e) => linkHandler(e)}>Client Reviews</li>
                </ul>

                <div className="nav__btn active" id='navhire_btn' onClick={(e) => linkHandler(e)}>
                        <button id='navhire_btn' onClick={(e) => linkHandler(e)}>
                            <p id='navhire_btn' onClick={(e) => linkHandler(e)}>
                                Hire Us
                            </p>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Navbar
