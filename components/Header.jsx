

function Header() {

    const linkHandler = (e) => {


        const projectSection = document.querySelector('#projects')



        const projectCords = projectSection.getBoundingClientRect();


        window.scrollTo({left: projectCords.left, top: projectCords.top + window.pageYOffset, behavior: "smooth"})


    }
    return (
        


            
                <div className="header" id='head'>
                    <div className="header__heading">
                        <h3>Choose Us To Build Your Next Quality Web App</h3>
                    </div>

                    <div className="header__paragraph">
                        <p>We don't just build websites. We build Interactions and Impacts that build Relationships.</p>
                    </div>

                    <div className="header__button" onClick={linkHandler}>
                        <button>Explore Our Projects</button>
                    </div>


                    <div className="img img__left">

                    </div>
                    <div className="img img__right">

                    </div>
                    
                </div>


    )
}

export default Header
