import React from 'react'

const FormContact = () => {
  return (
    <section className='bg-beige z-20 py-16 lg:py-20'>
      <div className='lg:max-w-7xl max-w-5xl mx-auto px-4'>
        <h1 className='text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>CONTÁCTENOS</h1>
        <div className='text-black text-lg'>
          <p>
            Si tienes alguna consulta, deseas obtener más información sobre nuestros servicios, o necesitas asistencia legal, no dudes en ponerte en contacto con nosotros.
          </p>
          <p>
            Completa el siguiente formulario y uno de nuestros especialistas se comunicará contigo a la brevedad.
          </p>

          <form className="space-y-4 my-10">
            <div>
              <label htmlFor="name" className="block text-black font-medium mb-2">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beige lg:w-9/12"
                placeholder="Tu nombre y apellido"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beige lg:w-9/12"
                placeholder="tuemail@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-black font-medium mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className=" text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beige lg:w-9/12"
                placeholder="Tu número de teléfono"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-beige lg:w-9/12"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>
            <div className="text-left">
              <button class="px-5 py-2 border-2 text-xl font-semibold border-black shadow-lg hover:bg-black text-black hover:text-beige duration-300 cursor-pointer active:scale-[0.98]"><a class="" href="">Enviar</a></button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default FormContact