import React from 'react';
import {headerLogo} from '../assets/images/index';
import {navLinks} from "../constants"
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className=' top-0 padding-x py-8 absolute z-10 w-full' >
        <nav className= 'flex justify-between items-center max-container' >
            <a href="/">
                <img 
                src={headerLogo}
                width={130}
                height={29}

                 alt="nike" />
            </a> 
            <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
              {
                navLinks.map((item) => (
                  <li key={item.label} >
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    >
                      {item.label}
                    </a>

                  </li>
                ))
              }

            </ul>
            <div className='hidden max-lg:block' >
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
