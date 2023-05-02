import BannerTitle from "./BannerTitle"

function Form() {
  return (
    <section className="">
      <BannerTitle text={'¡TU PRIVACIDAD ES NUESTRA RESPONSABILIDAD!'} />
      <div className="flex items-center justify-center">
        <p className="mt-7 p-4 max-w-[75ch] text-center text-xl font-medium">
          Gracias a nuestro equipo de soporte y tecnología bloquearemos tu barrio, tu ciudad y tu país de tal manera que no te puedan encontrar en medio de las transmisiones, siempre nos esforzaremos por cuidar tu privacidad y que si tu no lo deseas nadie se tiene que enterar sobre lo que tú haces.
        </p>
      </div>
      <form className="p-7 xl:px-60 2xl:px-96">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>

    </section>
  )
}

export default Form