import React from 'react'
import Image from 'next/image'
import doctora from '@/public/doctora.png'
import doctor from '@/public/doctor.png'


const OurTeam = () => {
    return (
        <section className='bg-white z-20 py-16'>
            <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>
                <h1 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>NUESTRO EQUIPO</h1>
                <p className='text-black mb-8 text-lg text-center'>Nuestro estudio está liderado por abogados con una vasta trayectoria y una profunda especialización en diversas áreas del derecho</p>
                <div className='grid lg:grid-cols-2 justify-items-center gap-y-10 lg:gap-x-10'>
                    {/* Imagen 1 */}
                    <div className='text-center '>
                        <Image src={doctora} className='lg:max-w-md mx-auto' />
                        <h2 className='text-beige font-bold text-xl mt-4'>EVA ÁLVAREZ</h2>
                        <hr className='border-t-2 border-beige w-20 mx-auto mt-2 mb-4' />
                        <div className='flex justify-center space-x-4 mb-4 text-beige'>

                        </div>
                        <ul className='text-black list-disc list-inside text-lg  text-left space-y-2'>
                            <li>Licenciada en Derecho por la Universidad de Buenos Aires, con distinción por su excelencia académica.</li>
                            <li>Máster en Derecho Empresarial por la Universidad de Harvard (2021), con especialización en Fusiones y Adquisiciones.</li>
                            <li>Asesora jurídica en varias startups tecnológicas y empresas emergentes en el ámbito de la innovación y el emprendimiento.</li>
                            <li>Conferencista internacional en temas de derecho tecnológico y regulaciones digitales, y autora de un libro sobre la transformación digital en el ámbito legal.</li>
                        </ul>
                    </div>
                    <div className='text-center '>
                        <Image src={doctor} className='lg:max-w-md mx-auto' />
                        <h2 className='text-beige font-bold text-xl mt-4'>PABLO BIAMONTE</h2>
                        <hr className='border-t-2 border-beige w-20 mx-auto mt-2 mb-4' />
                        <div className='flex justify-center space-x-4 mb-4 text-beige'>

                        </div>
                        <ul className='text-black text-left text-lg space-y-2 list-disc list-inside'>
                            <li>Licenciado en Derecho por la Universidad de Buenos Aires, con un enfoque en Derecho Penal.</li>
                            <li>Máster en Derecho Internacional y Derechos Humanos por la Universidad de Oxford (2015).</li>
                            <li>Consultor en derecho internacional para ONGs y organizaciones humanitarias, con experiencia en litigios internacionales y resolución de conflictos.</li>
                            <li>Miembro activo de la Asociación Internacional de Abogados Penalistas, participando en comités de ética y derechos humanos.</li>
                        </ul>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default OurTeam