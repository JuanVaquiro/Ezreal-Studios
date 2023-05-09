import ImgWhapp from './../../public/whzapp-3.png';

const BtnFloatWhapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573142842486&amp;text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20empezar%20el%20proceso%20de%20selecci%C3%B3n%20para%20pertenecer%20Ezreal %20Studios"
      className="whasa_app-float drop-shadow-lg rounded-tl-3xl rounded-br-3xl"
      target="_blank"
      rel="noreferrer"
    >
      <img src={ImgWhapp} alt="logo-whazapp" />
    </a>
  )
}

export default BtnFloatWhapp