import { headerLogo }   from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';


const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container flex-wrap w-full'>
            <a href="">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            { open &&
              <div className= ''>
              <ul className ={`lg:flex-1 lg:flex lg:justify-center lg:items-center lg:display-block justify-center gap-4`}>
                {navLinks.map( (item) => (
                    <li key={item.label}>
                      <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                        {item.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          }
            <div className='hidden max-lg:block' onClick={() => setOpen(!open)}>
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav;