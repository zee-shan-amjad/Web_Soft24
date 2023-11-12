import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function ArrowRight({onClick}) {
    return (
        <div className="arrow__right" onClick={onClick}>
            <BsArrowRight size="30px" ></BsArrowRight>
        </div>
    )
}

export default ArrowRight
