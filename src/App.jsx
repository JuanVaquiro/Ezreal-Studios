import BannerTitle from './components/BannerTitle'
import BtnFloatWhapp from './components/BtnFloatWhapp'
import Carrusel from './components/Carrusel'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import OurBenefits from './components/OurBenefits'
import TheTeam from './components/TheTeam'

function App() {
  return (
    <>
      <BtnFloatWhapp />
      <Carrusel />
      <Navbar />
      <TheTeam />
      <OurBenefits />
      <BannerTitle text={'¡TU PRIVACIDAD ES NUESTRA RESPONSABILIDAD!'} />
      <Form />
      <Footer />
    </>
  )
}

export default App
