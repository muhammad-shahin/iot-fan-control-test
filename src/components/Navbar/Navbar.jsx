import { NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { BsPersonCircle } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContextProvider';
import UserProfile from '../UserProfile/USerProfile';

const Navbar = () => {
  const { user, showProfile, setShowProfile } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    handleMouseLeave();
  }, [visible]);
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (visible) {
        setShowProfile(true);
      } else {
        setShowProfile(false);
      }
    }, 500);
  };

  return (
    <header className='bg-sky-100'>
      <nav className='py-3 container mx-auto flex justify-between items-center w-[90%] lg:w-auto relative'>
        {/* log */}
        <div>
          <h1 className='text-[2.5rem] font-bold text-sky-600'>
            IOT Fan Control
          </h1>
        </div>
        {/* nav items */}
        <ul
          className={` lg:static fixed top-[85px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } lg:h-auto h-screen lg:w-auto w-[50%] flex lg:flex-row flex-col lg:bg-none bg-sky-100 lg:p-0 p-4 justify-start lg:justify-center items-center lg:gap-10 gap-8 duration-700 pt-10 lg:pt-0 z-[100]`}
        >
          <li
            className='text-sky-600 font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className='text-sky-600 font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/news-category'>News Category</NavLink>
          </li>
          <li
            className='text-sky-600 font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li
            className='text-sky-600 font-medium text-[16px] hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/sign-up'>Sign Up</NavLink>
          </li>
        </ul>

        {/* Profile Icon */}
        <div
          id='profile-icon'
          className='flex justify-center items-center gap-6 relative group'
          onMouseEnter={() => setShowProfile(true)}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          {user ? (
            <img
              src={user.photoURL}
              className='w-[36px] object-cover rounded-full cursor-pointer'
            />
          ) : (
            <BsPersonCircle className='w-[32px] h-[32px] text-sky-600 cursor-pointer ' />
          )}
          {user && showProfile ? (
            <div className='absolute top-[62px] right-0'>
              <UserProfile setVisible={setVisible} />
            </div>
          ) : (
            ''
          )}

          {/* hamburger menu */}
          <div className='lg:hidden'>
            <Hamburger
              color='#0284C7'
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
