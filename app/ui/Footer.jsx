
import Image from 'next/image'
import logo from '@/public/logos/logo1-svg-trans.svg'
import ln from '@/public/iconos/linkedin.svg'
import ig from '@/public/iconos/instagram.svg'
import fc from '@/public/iconos/facebook.svg'
import tw from '@/public/iconos/twitter.svg'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row-reverse justify-around items-center">
        {/* Logo */}
        <div className="mt-10 md:mt-0  flex flex-col items-center">
          <Image
            src={logo}
            alt="Logo Alvarez & Biamonte"
            className="w-80"
          />
          {/* Redes Sociales */}
          <div className="flex -mt-6 space-x-4">

            <Image src={ln} className='w-8 p-1' />
            <Image src={tw} className='w-8 p-1' />
            <Image src={fc} className='w-8' />
            <Image src={ig} className='w-8 p-1' />

          </div>
        </div>

        {/* Información de Contacto */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-beige flex items-center">
              <MapPinIcon className="w-6 h-6 mr-2 text-beige" />
              Dirección
            </h3>
            <p>Av. Siempre Viva 1234</p>
            <p>Córdoba, Argentina</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-beige flex items-center">
              <PhoneIcon className="w-6 h-6 mr-2 text-beige" />
              Teléfonos
            </h3>
            <p>+54 356 123 4567</p>
            <p>+54 356 765 4321</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-beige flex items-center">
              <EnvelopeIcon className="w-6 h-6 mr-2 text-beige" />
              Email
            </h3>
            <p>contacto@a&b.com</p></div>

          <div>
            <h3 className="text-lg font-semibold text-beige flex items-center">
              <GlobeAltIcon className="w-6 h-6 mr-2 text-beige" />
              Horario de Atención
            </h3>
            <p>Lunes a Viernes: 9 - 18 hs</p></div>
        </div>


      </div>
    </footer>
  )
}

export default Footer