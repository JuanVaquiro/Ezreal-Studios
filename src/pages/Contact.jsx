import BtnFloatWhapp from "../components/BtnFloatWhapp"
import Footer from "../components/Footer"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import OurBenefits from "../components/OurBenefits"

function Contact() {
  return (
    <>
      <BtnFloatWhapp />
      <Navbar />
      <div className="mt-24">
        <OurBenefits />
      </div>
      <Form />
      <Footer />
    </>
  )
}

export default Contact