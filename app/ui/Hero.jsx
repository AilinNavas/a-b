// import React from 'react'
// import Image from 'next/image'
// import hero from '@/public/hero.jpg'

// const Hero = () => {
//     return (
//         <section className='mt-28'>
           
//                 <Image src={hero} className='w-full relative' />
//                 <div className='bg-black opacity-50 absolute top-28 w-full h-full '></div>
//                 <p className=' text-white text-right font-medium text-xl max-w-80 md:text-3xl lg:text-5xl lg:max-w-3xl absolute top-40 right-4 md:top-40 lg:top-60 md:right-10'>
//                     <span className='lg:block'>Donde la experiencia se encuentra con la <span className='text-beige'>empatía</span>,</span>
//                     <span> y la <span className='text-beige'>justicia</span> se convierte en <span className='text-beige'>realidad</span></span>
//                 </p>
         
//         </section>
//     )
// }

// export default Hero
import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.jpg';

const Hero = () => {
    return (
        <section className='relative mt-28'>
            <Image src={hero} className='w-full' />
            <div className='bg-black opacity-50 absolute inset-0'></div>
            <p className=' md:block text-white text-right font-medium text-xl max-w-80 md:text-3xl lg:text-5xl lg:max-w-3xl absolute top-8 right-4 md:top-24 lg:top-60 md:right-10'>
                <span className='block'>
                    Donde la experiencia se encuentra con la <span className='text-beige'>empatía</span>,
                </span>
                <span>
                    y la <span className='text-beige'>justicia</span> se convierte en <span className='text-beige'>realidad</span>
                </span>
            </p>
        </section>
    );
};

export default Hero;
