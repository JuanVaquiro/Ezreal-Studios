
const Navbar = () => {
  return (
    <nav className="bg-[#12142d] text-[#f8eff9] fixed w-full z-20 top-0 left-0 border-b border-[#161018]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Ezreal Studio</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#161018] rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#12142d]">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#f8eff9] bg-[#25baf0] rounded md:bg-transparent md:text-[#25baf0] md:p-0" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#f8eff9] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#25baf0] md:p-0">Nosotros</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-[#f8eff9] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#25baf0] md:p-0">Trabaja en el equipo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar