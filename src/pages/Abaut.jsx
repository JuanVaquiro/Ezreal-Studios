import BtnFloatWhapp from "../components/BtnFloatWhapp"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Modelo3 from "./../assets/imgs/modelo3.jpg"

function Abaut() {
  return (
    <>
      <Navbar />
      <BtnFloatWhapp />
      <section className="2xl:container flex flex-col items-center text-center mt-12 lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px">
        <h3 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">SI NO TIENES EXPERIENCIA...
          <span className="text-[#f89fb2]"> NO IMPORTA!</span></h3>
        <p className="max-w-prose">Estamos especializados en modelos sin experiencia y por supuesto en modelos top de alta facturación tenemos un area diseñada para dar un seguimiento integral y personalizado a cada una de nuestras modelos</p>
      </section>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg"
            src={Modelo3}
            alt="modelo-webcam"
          />
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col items-center text-center gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">NUESTRAS VENTAJAS</h2>
            <p className="font-normal text-base leading-6 text-gray-600 ">Lo que nos hace especiales</p>
          </div>
          <div className="w-full lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#000000" viewBox="0 0 256 256"><path d="M180,232a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h80A12,12,0,0,1,180,232Zm40-128a91.51,91.51,0,0,1-35.17,72.35A12.26,12.26,0,0,0,180,186v2a20,20,0,0,1-20,20H96a20,20,0,0,1-20-20v-2a12,12,0,0,0-4.7-9.51A91.57,91.57,0,0,1,36,104.52C35.73,54.69,76,13.2,125.79,12A92,92,0,0,1,220,104Zm-24,0a68,68,0,0,0-69.65-68C89.56,36.88,59.8,67.55,60,104.38a67.71,67.71,0,0,0,26.1,53.19A35.87,35.87,0,0,1,100,184h56.1A36.13,36.13,0,0,1,170,157.49,67.68,67.68,0,0,0,196,104Zm-20.07-5.32a48.5,48.5,0,0,0-31.91-40,12,12,0,0,0-8,22.62,24.31,24.31,0,0,1,16.09,20,12,12,0,0,0,23.86-2.64Z"></path></svg>
                <h3 className="text-lg font-bold leading-5 text-[#f89fb2] mt-4">TE AYUDAMOS EN TU SHOW</h3>
                <p className="text-sm leading-5 text-gray-800 mt-4">Tenemos un equipo dispuesto a ayudarte a planear y perfeccionar tu show</p>

              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#000000" viewBox="0 0 256 256"><path d="M230.47,67.5a12,12,0,0,0-19.26-4.32L172.43,99l-12.68-2.72L157,83.57l35.79-38.78a12,12,0,0,0-4.32-19.26A76,76,0,0,0,89.24,123.8L31.17,174c-.22.19-.44.39-.64.6a36,36,0,0,0,50.91,50.91c.21-.2.41-.42.6-.64l50.16-58.07A76,76,0,0,0,230.47,67.5ZM160,148a52.1,52.1,0,0,1-25.13-6.46A12,12,0,0,0,120,144.2L64.21,208.75a12,12,0,0,1-17-17L111.8,136a12,12,0,0,0,2.65-14.89A52,52,0,0,1,160,44h.89L135.17,71.87a12,12,0,0,0-2.91,10.65l5.66,26.35a12,12,0,0,0,9.21,9.21l26.35,5.66a12,12,0,0,0,10.65-2.91L212,95.12c0,.3,0,.59,0,.89A52.06,52.06,0,0,1,160,148Z"></path></svg>
                <h3 className="text-lg font-bold leading-5 text-[#f89fb2] mt-4">MONITORES 24/7</h3>
                <p className="text-sm leading-5 text-gray-800 mt-4">enemos un equipo de monitores que siempre te acompañaran para que cada dia seas la mejo</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#000000" viewBox="0 0 256 256"><path d="M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"></path></svg>
                <h3 className="text-lg font-bold leading-5 text-[#f89fb2] mt-4">SOPORTE TECNICO</h3>
                <p className="text-sm leading-5 text-gray-800 mt-4">Sabemos que trabajas con tecnología por ello disponemos de alguien que siempre esta pendiente de todos esos detallados técnicos que son tan molestos cuando no se les da la solución a tiempo.</p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#000000" viewBox="0 0 256 256"><path d="M237,77.47A28,28,0,0,0,216,68H164V56a44.05,44.05,0,0,0-44-44,12,12,0,0,0-10.73,6.63L72.58,92H32a20,20,0,0,0-20,20v88a20,20,0,0,0,20,20H204a28,28,0,0,0,27.78-24.53l12-96A28,28,0,0,0,237,77.47ZM36,116H68v80H36ZM220,96.5l-12,96a4,4,0,0,1-4,3.5H92V106.83L126.82,37.2A20,20,0,0,1,140,56V80a12,12,0,0,0,12,12h64a4,4,0,0,1,4,4.5Z"></path></svg>
                <h3 className="text-lg font-bold leading-5 text-[#f89fb2] mt-4">APOYO PSICOLOGICO</h3>
                <p className="text-sm leading-5 text-gray-800 mt-4">Nuestra psicologa esta tambien 24/7 para atenderte y escucharte siempre que lo necesites.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Abaut