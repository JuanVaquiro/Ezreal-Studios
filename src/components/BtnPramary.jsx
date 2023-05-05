import { WhatsappLogo } from "../assets/icon-group"

function BtnPramary() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573142842486&amp;text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20empezar%20el%20proceso%20de%20selecci%C3%B3n%20para%20pertenecer%20Ezreal %20Studios"
      type="button"
      className="inline-flex gap-2 text-white bg-gradient-to-br from-pink-500 to-[#f5b2c1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
    ">
      <WhatsappLogo />
      Haz click aqui para comenzar a trababjar con nosotros
    </a>
  )
}

export default BtnPramary