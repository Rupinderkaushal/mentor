import React from 'react';
import "./Card.css";
import { FaUserAlt } from 'react-icons/fa';
const Card = (props) => {
  return (
    <div className='card-container'>
        <h1>{props.val.title}</h1>
        <div className='card-container__wrapper'>
            <div className='card-title-profile'>
                <div>
                    <p>{props.val.mentor}</p>
                    <p>{props.val.nft}</p>
                </div>
                <div>
                  <FaUserAlt/>
                </div>
            </div>
            <div>
                <p>Price per hour ({props.val.price}ETH)</p>
            </div>
            <div>
        <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-1 border border-black hover:border-transparent rounded" >Buy with metamask</button>
               
            </div>
        </div>
    </div>
  )
}

export default Card;