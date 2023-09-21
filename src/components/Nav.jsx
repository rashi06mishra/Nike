import { headerLogo }   from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';


const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <header className='padding-x py-8  z-10 w-full sticky top-0'>
        <nav className='flex justify-between items-center max-container '>
            <a href="/">
                <img 
                src={headerLogo} 
                alt="Logo" 
                width={129} 
                height={29} 
                />
            </a>
            { <div className= {`lg:block xl:block
                ${
                  open?"block":"hidden" 
                }`}>
              <ul className ={`lg:flex-1 lg:flex lg:justify-center lg:items-center justify-center gap-16`}>
                {navLinks.map( (item) => (
                    <li key={item.label}>
                      <a href={item.href} 
                      className='font-montserrat leading-normal text-lg text-slate-gray '
                      >
                        {item.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          }
            <div className='hidden max-lg:block' 
            onClick={() => setOpen(!open)}>
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav;