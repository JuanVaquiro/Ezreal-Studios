import model from '../assets/imgs/modelo2.jpg'
import { Check } from "../assets/icon-group"

function OurBenefits() {
  return (
    <section>
      <div className="flex p-4 items-center flex-col-reverse lg:flex-row lg:justify-around">
        <ul className="p-4 lg:p-2 text-base lg:text-lg">
          <li className="flex gap-2 p-1">
            <Check />
            Soporte y monitoreo 24/7
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Apoyo psicológico
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
            Cerca del transmilenio, el alimentador te deja a 2 minutos de distancia
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Contamos con un excelente lugar, perfectamente acogedor
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Mas de 5 años de experiencia
          </li>
          <li className="flex gap-2 p-1">
            <Check />
            Porcentajes hasta del 70%
          </li>
        </ul>
        <div>
          <img className="w-72 rounded-2xl drop-shadow-lg" src={model} alt="foto-modelo-webcam" />
        </div>
      </div>
    </section>
  )
}

export default OurBenefits