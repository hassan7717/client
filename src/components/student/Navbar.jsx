import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {

  const {isEducator} = useContext(AppContext)
  const isCourseListPage = location.pathname.includes('/course-list');
  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (

    <div className={`flex w-full items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-400 py-4 ${isCourseListPage ? 'bg-gray' : 'bg-gray-100'}`}>
      <Link to={'/'}>
        <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
      </Link>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>

        <div className='flex items-center gap-5'>

          { user &&
          <>
          <Link to={'/educator'}>
            <button>
              {isEducator ? "Educator Dashboard" : "Become Educator"} |
            </button>
           <Link to='/my-enrollments'> My Enrollments</Link>
        </Link>
          </>
          }
          
        </div>

        { user ? <UserButton/> : 
        <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
    
      </div>
  
      {/* For Phone Screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
       
        <div className='f1ex items-center gap-I sm:gap-2 max-sm:text-xs'>
        
          { user &&
          <>
            <Link to={'/educator'}>
            <button>
              {isEducator ? "Educator Dashboard" : "Become Educator"} |
            </button>
           <Link to='/my-enrollments'> My Enrollments</Link>
        </Link>
          </>
          }
       
        </div>
          {
            user ? <UserButton />
            : <button onClick={()=> openSignIn()} className='cursor-pointer'><img src={assets.user_icon} alt="" /></button>
          }
     
      </div>
    </div>
  )
}

export default Navbar
