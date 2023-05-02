import { CalendarCheck, CurrencyDollar, Info } from '../assets/icon-group'
import modelo1 from '../assets/imgs/modelo1.jpg'
import '../styles/TheTeam.css'

function TheTeam() {
  return (
    <section className="container-the-crew">
      <article className="container-items-the-crew">
        <div className='items-text'>
          <h2 className='title-section'>
            <span>Trabajando </span>
            para ti
          </h2>
          <p>durante años estudiamos las principales quejas de las modelos que hacen parte de esta industria, por eso quisimos cambiar completamente el modelo de trabajo dando prioridad a las modelos que a los números y así nació atlanta studio,</p>
          <br />
          <p> un estudio completamente distinto que busca la felicidad y que las modelos puedan cumplir sus sueños anhelos y metas, somos reconocidos y catalogados como uno de los mejores de todo el país atrévete a darnos la oportunidad.</p>
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
  )
}

export default TheTeam