
import Image from "next/image";
import hero2 from '@/public/desktop.webp';
import hero1 from '@/public/mobile.webp';

const Hero = () => {
    return (
        <div className='relative py-32 md:py-64'>
       

            <div className="px-4 max-w-7xl mx-auto flex md:flex-row-reverse">
                <div className="lg:w-1/2 p-4 flex bg-black/50 rounded">
                    <p className="text-white text-2xl max-w-80 md:max-w-3xl md:text-4xl lg:text-5xl space-y-4">
                        <span className='block'>
                            Donde la experiencia se encuentra con la <span className='text-beige font-medium'>empatía</span>,
                        </span>
                        <span>
                            y la <span className='text-beige font-medium'>justicia</span> se convierte en <span className='text-beige font-medium'>realidad</span>
                        </span>
                    </p>
                </div>
                <div className="">

                </div>

            </div>

            <div className="px-4 max-w-7xl mx-auto mt-4">
                <div className="flex lg:justify-end">
                    <a href={'https://walink.co/7712bc'} target="_blank"
                        rel="noopener noreferrer">
                        <button className=" px-7 py-1 md:py-2 border-2 border-black bg-black text-beige text-lg font-semibold z-0 hover:bg-transparent hover:text-black ease-in duration-300 rounded-md">
                            Solicitar asesoría
                        </button>
                    </a>
                </div>
            </div>
         

            {/* Imagen para dispositivos móviles */}
            <Image
                src={hero1}
                alt='Diseño exclusivo - móvil'
                quality={80}
                priority
                sizes="(max-width: 768px) 100vw"
                className='w-full block lg:hidden absolute top-[110px] -z-10'
                placeholder="blur"
            />

            {/* Imagen para pantallas grandes */}
            <Image
                src={hero2}
                alt='Diseño exclusivo - escritorio'
                quality={80}
                sizes="(min-width: 1024px) 100vw"
                className='w-full hidden lg:block absolute top-0 -z-10'
                placeholder="blur"
            />
        </div>
    )
}

export default Hero;
