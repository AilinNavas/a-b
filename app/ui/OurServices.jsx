import React from 'react'
import Image from 'next/image'
import justicia from '@/public/justicia.svg'


const OurServices = () => {
  return (
    <section className='bg-black z-20 py-16 lg:py-20'>
      <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>
         {/* <h2 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>AREAS DE SERVICIOS</h2>
        <div className='text-white text-lg grid gap-6 lg:grid-cols-3 pb-16'>
        
        <div className=' flex flex-col space-y-4 justify-center items-center'>
          <div className='border border-beige rounded-full w-28 h-28 p-2'>
            <Image src={civil} />
          </div>
          <div>
            <p className='text-white '>DERECHO CIVIL</p>
          </div>
        </div>

        <div className=' flex flex-col space-y-4 justify-center items-center'>
          <div className='border border-beige rounded-full w-28 h-28 p-2'>
            <Image src={laboral} />
          </div>
          <div>
            <p className='text-white '>DERECHO LABORAL</p>
          </div>
        </div>

        <div className='flex flex-col space-y-4 justify-center items-center'>
          <div className='border border-beige rounded-full w-28 h-28 p-2'>
            <Image src={previsional} />
          </div>
          <div>
            <p className='text-white '>DERECHO PREVISIONAL</p>
          </div>
        </div>
        </div>  */}

        <div className='pb-16 lg:pb-20'>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>SERVICIOS PARA EMPRESAS</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mt-2 mb-4' />
          <div className='flex justify-center space-x-4 mb-4 text-beige'></div>
          <div className='text-white text-lg grid gap-6 lg:grid-cols-2'>
            <p>Nuestro estudio se enfoca en ofrecer un Asesoramiento Legal integral para empresas, sociedades y empresarios individuales, abarcando todas las etapas del ciclo de vida empresarial, desde su constitución hasta su disolución.</p>
            <p>Proveemos orientación diaria en áreas clave como derecho societario, contractual, laboral y fiscal, con un enfoque preventivo que incluye la implementación de estrategias de negociación y resolución de conflictos fuera de los tribunales.</p>
            <p>En caso de que las medidas preventivas no sean suficientes, contamos con expertos en derecho de daños y derecho concursal para la gestión de litigios, manejo de insolvencias y conflictos entre socios. También ofrecemos servicios especializados en Derecho Penal Económico, incluyendo querellas y defensas en este ámbito.</p>
            <p>Además, nuestro equipo tiene amplia experiencia en la estructuración y reestructuración de empresas, lo que nos permite acompañar a nuestros clientes en la toma de decisiones estratégicas que garanticen la viabilidad y el crecimiento de sus negocios. </p>
          </div>
          <ul className='text-white text-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho del consumidor</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho administrativo – Obra pública</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Societario</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Civil y de Daños</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Comercial y de la empresa</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Concursos y quiebras</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Penal Económico</li>
          </ul>


        </div>

        <div className='pb-16 lg:pb-20'>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>SERVICIOS PARA PARTICULARES</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mt-2 mb-4' />
          <div className='flex justify-center space-x-4 mb-4 text-beige'></div>
          <div className='text-white text-lg grid gap-6 lg:grid-cols-2'>
            <p>Nuestro estudio se distingue por su profunda experiencia y conocimientos en las principales ramas del derecho privado, ofreciendo un enfoque integral y personalizado para atender las necesidades legales de nuestros clientes particulares.</p>
            <p>Entendemos que cada situación es única, por lo que nos comprometemos a brindar un servicio que combina la excelencia técnica con una atención cercana en las siguientes areas:</p>

          </div>
          <ul className='text-white text-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho laboral y previsional</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Accidentes y Riesgos del Trabajo</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Administración de propiedades</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho civil y comercial general</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Defensa del usuario y del consumidor</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Daños y perjuicios</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Derecho Penal Económico</li>
          </ul>


        </div>

        <div>
          <h3 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>SERVICIOS PARA PROFESIONALES</h3>
          <hr className='border-t-2 border-beige w-20 mx-auto mt-2 mb-4' />
          <div className='flex justify-center space-x-4 mb-4 text-beige'></div>
          <div className='text-white text-lg grid gap-6 lg:grid-cols-2'>
            <p>Nuestro estudio ofrece soporte continuo a abogados, contadores y otros profesionales, proporcionándoles asesoría especializada en sus áreas de práctica</p>
            <p>Elaboramos dictámenes técnicos, recursos procesales y ofrecemos consultoría diaria para asegurar que cuenten con el respaldo necesario en sus gestiones legales y contables.</p>

          </div>
          <ul className='text-white text-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6'>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Consultoría egal diaria</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Asesoramiento en recursos procesales</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Elaboración de dictámenes técnicos</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Capacitación y actualización profesional</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Consultoría en estrategias fiscales y financieras</li>
            <li className='flex items-center'><Image src={justicia} className='w-8 h-8 mr-2' /> Asistencia en litigios y mediación</li>
          
          </ul>


        </div>


      </div>
    </section>
  )
}

export default OurServices