import BannerTitle from "./BannerTitle"
import BtnPramary from "./BtnPramary"

function Form() {
  return (
    <section className="bg-[#F5F5F5]">
      <BannerTitle text={'¡TU PRIVACIDAD ES NUESTRA RESPONSABILIDAD!'} />
      <div className="flex items-center justify-center">
        <p className="mt-7 p-4 max-w-[75ch] text-center text-base lg:text-lg">
          Gracias a nuestro equipo de soporte y tecnología bloquearemos tu barrio, tu ciudad y tu país de tal manera que no te puedan encontrar en medio de las transmisiones, siempre nos esforzaremos por cuidar tu privacidad y que si tu no lo deseas nadie se tiene que enterar sobre lo que tú haces.
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
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Maria" required />
        </div>
        <div className="mb-6">
          <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900">
            Numero de whatsapp:
          </label>
          <input type="number" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="3001213145" required />
        </div>
        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          ENVIAR
        </button>
      </form>
    </section>
  )
}

export default Form