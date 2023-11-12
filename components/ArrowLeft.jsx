import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

function ArrowLeft({onClick}) {
    return (
        <div className= "arrow__left" onClick={onClick}>
            <BsArrowLeft  size="30px"></BsArrowLeft>
        </div>
    )
}

export default ArrowLeft
