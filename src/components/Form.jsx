import BannerTitle from "./BannerTitle"
import BtnPramary from "./BtnPramary"

function Form() {
  return (
    <section className="bg-[#f2e8e3]">
      <BannerTitle text={'¡TU PRIVACIDAD ES NUESTRA RESPONSABILIDAD!'} />
      <div className="flex items-center justify-center">
        <p className="mt-7 p-4 max-w-[75ch] text-center text-base lg:text-lg">
          Contamos con un equipo de soporte y tecnología que te permitirá bloquear tu localidad, ciudad y país durante las transmisiones. Nos esforzamos por proteger tu privacidad y garantizamos que nadie sabrá lo que haces si no lo deseas.
        </p>
      </div>
      <div className="text-center mt-5">
        <BtnPramary />
        <h2 className="text-center text-xl font-medium">
          ¿QUIERES QUE NOSOTROS TE CONTACTEMOS? <br />
          SOLO DEBES LLENAR EL SIGUIENTE FORMULARIO
        </h2>
      </div>
      <form className="p-7 xl:px-60 2xl:px-96">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Nombre:
          </label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5" placeholder="Tu nombre" required />
        </div>
        <div className="mb-6">
          <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900">
            Numero de whatsapp:
          </label>
          <input type="number" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5" placeholder="3012131415" required />
        </div>
        <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-[#f5b2c1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          ENVIAR
        </button>
      </form>
    </section>
  )
}

export default Form