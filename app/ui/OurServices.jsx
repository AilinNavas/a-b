import React from 'react'
import Image from 'next/image'
import justicia from '@/public/justicia.svg'


const OurServices = () => {
  return (
    <section id='services' className='border-2 border-white'>
    <div className='bg-black z-20 py-16 lg:py-20'>
      <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>

        <div className='pb-16 lg:pb-20'>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8'>SERVICIOS PARA EMPRESAS</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mb-4 md:mb-8 ' />
          <div className='text-white text-lg space-y-2 '>
            <p>En Álvarez & Biamonte ofrecemos asesoramiento legal integral para empresas y empresarios individuales, cubriendo cada etapa del ciclo de vida empresarial, desde la constitución hasta la disolución.</p>
            <p>Brindamos orientación diaria en áreas clave como derecho societario, laboral y fiscal, con un enfoque preventivo que optimiza la toma de decisiones y evita conflictos costosos.</p>
          </div>
          <ul className='text-white text-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8 '>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho del consumidor</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho administrativo – Obra pública</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho Societario</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho Civil y de Daños</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho Comercial y de la empresa</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' alt='icono-justicia' /> Derecho Penal Económico</li>
          </ul>
          <div className='text-center pt-8'>
          <button className="rounded-md px-5 py-2 border-2 text-xl font-semibold border-beige shadow-lg bg-beige hover:bg-black text-black hover:text-beige duration-300 cursor-pointer active:scale-[0.98]"><a className="" href="">Solicitar asesoría gratuita</a></button>
          </div>
        </div>



        <div className='pb-16 lg:pb-20'>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8'>SERVICIOS PARA PARTICULARES</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mb-4 md:mb-8' />
          <div className='flex justify-center space-x-4 mb-4 text-beige'></div>
          <div className='text-white text-lg space-y-2'>
            <p>Nuestro estudio se distingue por su profunda experiencia y conocimientos en las principales ramas del derecho privado, ofreciendo un enfoque integral y personalizado.</p>
            <p>Entendemos que cada situación es única, por lo que nos comprometemos a brindar un servicio que combina la excelencia técnica con una atención cercana en las siguientes areas:</p>

          </div>
          <ul className='text-white text-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8'>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho laboral y previsional</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Accidentes y Riesgos del Trabajo</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Administración de propiedades</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho civil y comercial general</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Defensa del usuario y del consumidor</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Penal Económico</li>
          </ul>

          <div className='text-center pt-8'>
          <button className="rounded-md px-5 py-2 border-2 text-xl font-semibold border-beige shadow-lg bg-beige hover:bg-black text-black hover:text-beige duration-300 cursor-pointer active:scale-[0.98]"><a className="" href="">Solicitar asesoría gratuita</a></button>
          </div>

        </div>



        <div>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8'>SERVICIOS PARA PROFESIONALES</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mb-4 md:mb-8 ' />
          <div className='flex justify-center space-x-4 mb-4 text-beige'></div>
          <div className='text-white text-lg space-y-2'>
            <p>Nuestro estudio ofrece soporte continuo a abogados, contadores y otros profesionales, proporcionándoles asesoría especializada en sus áreas de práctica</p>
            <p>Elaboramos dictámenes técnicos, recursos procesales y ofrecemos consultoría diaria para asegurar que cuenten con el respaldo necesario en sus gestiones legales y contables.</p>

          </div>
          <ul className='text-white text-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-8'>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Consultoría legal diaria</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Asesoramiento en recursos procesales</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Elaboración de dictámenes técnicos</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Capacitación y actualización profesional</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Consultoría en estrategias fiscales y financieras</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Asistencia en litigios y mediación</li>

          </ul>
          <div className='text-center pt-8'>
          <button className="rounded-md px-5 py-2 border-2 text-xl font-semibold border-beige shadow-lg bg-beige hover:bg-black text-black hover:text-beige duration-300 cursor-pointer active:scale-[0.98]"><a className="" href="">Solicitar asesoría gratuita</a></button>
          </div>
        </div>


      </div>
    </div>
    </section>
  )
}

export default OurServices