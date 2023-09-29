import React from 'react'
import Button from '../componets/Button'

const Subscribe = () => {
  return (
    <section className='flex max-container justify-between items-center gap-10 max-lg:flex-col' id='contact-us'>
      <h3 className='text-4xl font-bold font-palanquin lg:max-w-md leading-[68px]' >
        Sign up for 
        <span className='text-coral-red' > Update </span>
        & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ' >
        <input type="text" name="" placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full  ' >
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
      
    </section>
  )
}

export default Subscribe
