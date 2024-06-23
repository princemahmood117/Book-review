import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar mx-auto max-w-[95%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-xl"
            >
              <NavLink to='/'>
              Home
            </NavLink>

              <NavLink to='/listedBooks'>
              Listed Books
            </NavLink>

              <NavLink to='/pages'>
              Pages to read
            </NavLink>

            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost text-3xl">Book Vibe</NavLink>
  
        </div>
        <div className="navbar-center  hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal  text-xl gap-3">


          <NavLink to='/' className={({isActive})=> isActive? 'border border-green-400 rounded-lg p-2' : 'text-xl'}>
              Home
            </NavLink>

              <NavLink to='/listedBooks' className={({isActive})=> isActive? 'border border-green-400 rounded-lg p-2' : 'text-xl'}>
              Listed Books
            </NavLink>

              <NavLink to='/pages' className={({isActive})=> isActive? 'border border-green-400 rounded-lg p-2 ' : 'text-xl'}>
              Pages to read
            </NavLink>

            

          </ul>
        </div>
  
        <div className="flex">
          <div>
            <a className="btn mr-2 bg-green-500 text-white border-0 hover:bg-green-600">Sign In</a>
          </div>
  
          <div>
            <a className="btn bg-cyan-400 text-white border-0 hover:bg-cyan-500">Sign Up</a>
          </div>
        </div>
      </div>
    );
};

export default Header;