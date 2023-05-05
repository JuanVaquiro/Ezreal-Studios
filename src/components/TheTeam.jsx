import { CalendarCheck, CurrencyDollar, Info } from '../assets/icon-group'
import modelo1 from '../assets/imgs/modelo1.png'
import '../styles/TheTeam.css'
import BannerTitle from './BannerTitle'

function TheTeam() {
  return (
    <>
      <div className='-mt-52'>
        <BannerTitle text='MAS DE 5 AÑOS DE EXPERIENCIA' />
      </div>
      <section className="container-the-crew">
        <article className="container-items-the-crew">
          <div className='items-text'>
            <h2 className='title-section'>
              <span>Trabajando </span>
              para ti
            </h2>
            <p>
              Ezreal studios se destaca por ser único en el enfoque hacia nuestras chicas. Después de estudiar las principales quejas de las modelos en la industria durante varios años, decidimos crear un modelo de trabajo completamente nuevo.
            </p>
            <br />
            <p>
              En Ezreal Studios, priorizamos el bienestar de las modelos sobre los números, y nuestro objetivo es ayudar a que cumplan sus sueños, aspiraciones y metas. Estamos comprometidos a crear un ambiente feliz y saludable para nuestras modelos. Te invitamos a que nos des la oportunidad de demostrarte lo que podemos hacer por ti.
            </p>
          </div>
          <div className='item-img'>
            <img src={modelo1} alt="img" />
          </div>
        </article>
        <div className='container-members'>
          <div className='members-item'>
            <CalendarCheck />
            <h3>Pagos siempre <br />a tiempo</h3>
            <p>Grandes ingresos desde <br />
              el primer día. Garantizamos <br />
              ingresos  fijos sin riesgos.</p>
          </div>
          <div className='members-item-2'>
            <CurrencyDollar />
            <h3>Gana en<br />dolares</h3>
            <p>Gana más trabajando<br />
              con nosotros, ya que nuestros<br />
              ingresos son en dólares.
            </p>
          </div>
          <div className='members-item-3'>
            <Info />
            <h3>Soporte y <br /> monitoreo 24/7</h3>
            <p>
              ¿sin experiencias?<br />
              contamos con un equipo <br />
              dedicado a nuestras modelos</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TheTeam