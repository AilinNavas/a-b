
import React from 'react';

const AboutUs = () => {
    return (
        <section className='bg-black z-20 py-16 -mt-10 md:mt-0 lg:py-20'>
            <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>
                <h1 className='text-beige font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>ESTUDIO DE ABOGADOS</h1>
                <div className='text-white text-lg grid gap-6 lg:grid-cols-2'>
                    <p>
                        <span className='font-semibold'>Álvarez & Biamonte</span> es un prestigioso estudio jurídico en Mendoza con más de 20 años de experiencia, conocido por su atención personalizada y directa de sus socios. Ofrece soluciones legales adaptadas a las necesidades de cada cliente, combinando experiencia y enfoque moderno para garantizar asesoramiento preciso y eficiente.
                    </p>
                    <p>
                    El equipo, compuesto por abogados altamente capacitados, se especializa en gestionar causas en volumen, apoyándose en herramientas tecnológicas y una biblioteca física y digital. La constante actualización jurídica y su compromiso con la integridad brindan seguridad y confianza en cada proceso legal.
                    </p>
                 
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
