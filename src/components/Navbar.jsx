import { NavLink } from 'react-router-dom'
import logo from './../../public/logo.svg'

const Navbar = () => {
  const activeStyles = 'md:text-[#f389a0]'
  return (
    <nav className="bg-[#2b2b2b] text-[#f8eff9] fixed w-full z-20 top-0 left-0 border-b border-[#2b2b2b]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/#" className="flex items-center">
          <img src={logo} className="h-16 mr-1" alt="Ezreal_Studios_logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Ezreal Studios</span>
        </NavLink>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#2b2b2b] rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#2b2b2b]">
            <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${activeStyles} block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent
              md:hover:text-[#f5b2c1] md:p-0` : 'block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent md:hover:text-[#f5b2c1] md:p-0'
            }
          >
            Inicio
          </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  isActive ? `${activeStyles} block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent
                  md:hover:text-[#f5b2c1] md:p-0` : 'block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent md:hover:text-[#f5b2c1] md:p-0'
                }
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${activeStyles} block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent
                  md:hover:text-[#f5b2c1] md:p-0` : 'block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#f5b2c1] rounded md:bg-transparent md:hover:text-[#f5b2c1] md:p-0'
                }
              >
                Trabaja en el equipo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar