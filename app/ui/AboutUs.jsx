// import React from 'react'

// const AboutUs = () => {
//     return (
//         <section className='bg-black z-20 py-16'>
//             <div className=' lg:max-w-7xl max-w-5xl mx-auto px-4 border-2 '>
//                 <div className='text-white space-y-4 text-lg'>
//                 <h1 className='text-beige font-bold text-center text-xl md:text-2xl lg:text-3xl'>ESTUDIO DE ABOGADOS</h1>
//                 <p><span className='font-semibold'>Álvarez & Biamonte</span> es un destacado estudio jurídico en la provincia de Mendoza, reconocido por su enfoque personalizado y atención directa por parte de sus socios.</p>
//                 <p>La combinación de la experiencia de sus abogados con una visión moderna y un compromiso firme con el estudio y análisis de cada caso, convierte a Álvarez & Biamonte en una opción confiable y profesional para empresas y particulares. Su constante actualización en materia jurídica asegura un servicio de calidad y precisión en cada asesoramiento.</p>
//                 <p>El equipo de Álvarez & Biamonte, apoyado por un cuerpo de abogados altamente capacitados, ofrece soluciones legales eficientes, especialmente para clientes con necesidades de manejo de causas en volumen. La formación académica y la integridad de sus integrantes son pilares fundamentales en la prestación de sus servicios.</p>
//                 <p>Además, el estudio cuenta con tecnología avanzada y herramientas informáticas para el análisis de riesgos y la consulta jurídica, respaldadas por una completa biblioteca física y digital. Álvarez & Biamonte se compromete a brindar seguridad y confianza en cada paso del proceso legal.</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutUs
import React from 'react';

const AboutUs = () => {
    return (
        <section className='bg-black z-20 py-16 lg:py-20'>
            <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>
                <h1 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>ESTUDIO DE ABOGADOS</h1>
                <div className='text-white text-lg grid gap-6 lg:grid-cols-2'>
                    <p>
                        <span className='font-semibold'>Álvarez & Biamonte</span> es un destacado estudio jurídico en la provincia de Mendoza, reconocido por su enfoque personalizado y atención directa por parte de sus socios, respaldado por más de 20 años de experiencia ofreciendo soluciones legales adaptadas a las necesidades específicas de cada cliente.
                    </p>
                    <p>
                        La combinación de la experiencia de sus abogados con una visión moderna y un compromiso firme con el estudio y análisis de cada caso, convierte a Álvarez & Biamonte en una opción confiable y profesional para empresas y particulares. Su constante actualización en materia jurídica asegura un servicio de calidad y precisión en cada asesoramiento.
                    </p>
                    <p>
                        El equipo de Álvarez & Biamonte, apoyado por un cuerpo de abogados altamente capacitados, ofrece soluciones legales eficientes, especialmente para clientes con necesidades de manejo de causas en volumen. La formación académica y la integridad de sus integrantes son pilares fundamentales en la prestación de sus servicios.
                    </p>
                    <p>
                        Además, el estudio cuenta con tecnología avanzada y herramientas informáticas para el análisis de riesgos y la consulta jurídica, respaldadas por una completa biblioteca física y digital. Álvarez & Biamonte se compromete a brindar seguridad y confianza en cada paso del proceso legal.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
