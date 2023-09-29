import React from 'react';
import { star } from '../assets/icons';

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col max-sm:w-full' >
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
        <div className="flex mt-8 justify-start gap-2.5 ">
           <img src={star} alt="rating" />
           <p className='font-montserrat text-xl leading-normal text-slate-gray' >4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin' >{name}</h3>
        <p className='mt-2 font-palanquin text-coral-red text-2xl' >{price}</p>
    </div>
  )
}

export default PopularProductCard
