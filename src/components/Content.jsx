import React from 'react'
import plantImg from '../images/plant-img.png'
import '../Style/Content.css';

const Content = () => {
    return (
        <div className='content-holder'>
            <div className='pic-holder'>
                <img src={plantImg} alt='plant img'/>
            </div>
            <div className='text-holder'>
                <h1>SOHO</h1>
                <p>Furniture that</p>
                <p>Everyone</p>
                <p>Loves</p>
            </div>
        </div>
    )
}

export default Content