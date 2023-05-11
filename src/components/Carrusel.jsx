import { Link } from 'react-router-dom'
import model from '../assets/imgs/modelo4.jpg'


function Carrusel() {
  return (
    <main className="relative w-full mt-16" >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[612px]">
        <img
          src={model}
          className="absolute block w-full h-full object-cover"
          alt="foto-model-profesional"
        />
      </div>
      <div className='relative z-20 -top-44 lg:-top-96 text-center'>
        <h1 className="text-3xl p-2 font-bold text-gray-100/90 lg:text-7xl lg:p-4">Ezreal Studios Bogotá</h1>
        <h3 className="text-sm p-2 font-medium text-gray-50/90 lg:text-2xl lg:p-4">¿QUIERES SER LA MEJOR MODELO WEBCAM?</h3>
        <Link to="/contact" type="button" className="text-white bg-gradient-to-br from-pink-500 to-[#f5b2c1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          DA CLCIK AQUI
        </Link>
      </div>
    </main>
  )
}

export default Carrusel