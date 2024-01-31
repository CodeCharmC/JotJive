import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';


export default function Header() {
   const {theme} = useSelector((state) => state.theme);
   const dispatch = useDispatch();
   const currentUser = useSelector((state) => state.user.currentUser);
   const path = useLocation().pathname;
   const location = useLocation();

   return (
      <Navbar className='border-b-2'>
         <Link
            to="/"
            className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
         >
            <span
               className='px-2 py-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 rounded-lg text-white'
            >
               JotJive
            </span>
         </Link>
         <form>
            <TextInput
               type='text'
               placeholder='Search...'
               className='hidden lg:inline'
               rightIcon={AiOutlineSearch}
            />
         </form>
         <Button
            className='w-12 h-10 lg:hidden'
            color='gray'
            pill
         >
            <AiOutlineSearch />            
         </Button>
         <div className='flex gap-2 md:order-2'>
            <Button
               className='w-12 h-10 hidden sm:inline'
               color='gray'
               pill
               onClick={() => dispatch(toggleTheme())}
            >
               {theme === 'light' ? <FaMoon /> : <FaSun />}          
            </Button>
            <Link
               to='/sign-in'
            >
               {currentUser ? (
                  <Dropdown
                     arrowIcon={false}
                     inline
                     label={
                        <Avatar
                           alt='User'
                           img={currentUser?.profilePicture}
                           rounded
                        />
                     }
                  >
                     <Dropdown.Header>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                     </Dropdown.Header>
                     <Link to='/dashboard?tab=profile'>
                        <Dropdown.Item>Profile</Dropdown.Item>
                     </Link>
                     <Dropdown.Divider />
                     <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
               ):(
                  <Button gradientDuoTone='purpleToBlue' outline>
                     Sign In
                  </Button>)
               }
                      
            </Link>
            <Navbar.Toggle />            
         </div>
         <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>             
               <Link
                  to='/'
               >
                  Home
               </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>               
               <Link
                  to='/about'
               >
                  About
               </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
               <Link
                  to='/projects'
               >
                  Projects
               </Link>
            </Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   );
};

