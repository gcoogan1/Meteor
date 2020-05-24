import React from 'react';
import style from './Error.module.css'
import Error from '../../../assets/image-png/404 Image.png'



const ErrorCard = () => {
    return (
        <div className={style.cardWrapper}>
        <div className={style.error}>
            <img src={Error} alt="error" />
            <h5>PLACE NOT FOUND</h5>
            <p>Please try another location</p>
        </div>
        </div>
    )
}

export default ErrorCard
