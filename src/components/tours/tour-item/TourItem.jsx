import React from 'react';
import './TourItem.scss';


const TourItem = (tourItem) => {
    return (
        <li className={tourItem.isActiveTour ? 'active' : ''}>
            <div className={'name'}>{tourItem.title}</div>
            <div className={''}>{tourItem.tours}</div>
            <div className={'desc'}>{truncate(tourItem.desc)}</div>
            <div className={'price'}>{tourItem.price} $</div>
            <button disabled={!tourItem.isActiveTour} onClick={tourItem._handleDelete}>X</button>
        </li>
    )
}

export default TourItem;

const truncate = (string) => {
    return string.length >= 300 ? string.substring(0, 300) + '...' : string;
}



