import BannerTitle from "./BannerTitle"
import model from '../assets/imgs/modelo.jpg'
import { Check } from "../assets/icon-group"

function OurBenefits() {
  return (
    <section>
      <BannerTitle text={'NUESTROS BENEFICIOS'} />
      <div className="flex p-4 items-center flex-col-reverse lg:flex-row lg:justify-around">
        <ul className="p-4 lg:p-2 text-base lg:text-lg">
          <li className="flex gap-2 p-1">
            <Check />
            Soporte y monitoreo 24/7
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Apoyo psicologico
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Fotografia profesional
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Pagos a tiempo
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Pagamos el dolar al valor real
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Instalaciones limpias y adecuadas
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Cerca a transmilenio
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Estamos ubicados en un barrio muy seguro
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Disfrutamos de un excelente lugar, perfectamente acojedor
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Mas de 6 años de experiencia
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Somos un studio 100% legal
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Porcentajes hasta del 70%
          </li>
        </ul>
        <div>
          <img className="w-80" src={model} alt="foto-modelo-webcam" />
        </div>
      </div>
    </section>
  )
}

export default OurBenefits