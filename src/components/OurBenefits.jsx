import BannerTitle from "./BannerTitle"
import model from '../assets/imgs/modelo.jpg'

function OurBenefits() {
  return (
    <section>
      <BannerTitle text={'NUESTROS BENEFICIOS'}/>
      <div className="flex items-center justify-around">
        <ul className="text-lg p-2"> 
          <li>
            Soporte y monitoreo 24/7
          </li>
          <li>
            Apoyo psicologico
          </li>
          <li>
            Fotografia profesional
          </li>
          <li>
            Pagos a tiempo
          </li>
          <li>
            Pagamos el dolar al valor real
          </li>
          <li>
            Instalaciones limpias y adecuadas
          </li>
          <li>
            Cerca a transmilenio
          </li>
          <li>
            Estamos ubicados en un barrio muy seguro
          </li>
          <li>
            Nuestra sede se encuentra ubicada en un excelente lugar de la ciudad
          </li>
          <li>
            Mas de 6 años de experiencia
          </li>
          <li>
            Catalogado como uno de los mejores estudios de Colombia
          </li>
          <li>
            Somos un studio 100% legal
          </li>
          <li>
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