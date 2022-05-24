import React from 'react';
import Card from './Card/Card';
import './CardContainer.css';
const CardContainer = () => {
    const sData=[
        {
            title:"Rushil",
            mentor:"Mentor 1",
            nft:"NFT",
            price:0.0042
        },
        {
            title:"Rahul",
            mentor:"Mentor 2",
            nft:"NFT",
            price:0.001
        },
        {
            title:"Suja",
            mentor:"Mentor 3",
            nft:"NFT",
            price:0.006934
        },
        {
            title:"Nitin",
            mentor:"Mentor 4",
            nft:"NFT",
            price:0.000323369
        },
    ]
  return (
    <div className='card-wrapper'>
        {sData.map((val,index)=>{
            return(
                <div key={index} >
                   <Card val={val} />
                </div>
            )
        })}
    </div>
    
  )
}

export default CardContainer;