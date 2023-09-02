import React from 'react'
import './RestuarantCard.css'
import { imageURL } from '../utils/utils';
import star from '../../assets/star.svg';

function RestuarantCard(props) {
  const {name,area,avgRating,cloudinaryImageId,cuisines} =props
  return (
    <div className='rescards'>
      <div className='rescardimagecontainer'>
      <img src={`${imageURL}${cloudinaryImageId}`} className="rescardimage"/>

      </div>
      <div className='rescardTextcontainer'>
      <h1 className='rescardname'>{name}</h1>
      {/* <h6 className='rescardarea'>{area}</h6> */}
      <h3 className='rescardrating'>
        <img src={star} className='rescardstar'/>
        { avgRating}
        
        </h3>
      <h3 className='rescardcuisines'>{cuisines.join(", ")}</h3>

    </div>
    </div>
  )
}

export default RestuarantCard