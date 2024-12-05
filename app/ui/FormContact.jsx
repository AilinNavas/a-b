import React from 'react'

const FormContact = () => {
  return (
    <section id="contact" className='bg-beige z-20 py-16 lg:py-20 '>
      <div className='lg:max-w-7xl max-w-5xl mx-auto px-4 '>
        <h1 className='text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8 '>CONTÁCTENOS</h1>
        <div className='text-black text-lg'>
          <p>
            Si tienes alguna consulta, deseas obtener más información sobre nuestros servicios, o necesitas asistencia legal, no dudes en ponerte en contacto con nosotros.
          </p>
          <p>
            Completa el siguiente formulario y uno de nuestros especialistas se comunicará contigo a la brevedad.
          </p>
          <form className="space-y-4 mt-8 bg-beige max-w-3xl mx-auto flex flex-col md:p-12 rounded-md">
            <div>
              <label htmlFor="name" className="block pb-1 text-black">Nombre y Apellido</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full py-1 px-2 text-black rounded-md bg-beige border border-black outline-none focus:ring-0 focus:border-black autofill:bg-beige autofill:text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block pb-1 text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-1 px-2 text-black rounded-md bg-beige border border-black outline-none focus:ring-0 focus:border-black autofill:bg-beige autofill:text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block pb-1 text-black">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full py-1 px-2 text-black rounded-md bg-beige border border-black outline-none focus:ring-0 focus:border-black autofill:bg-black autofill:text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block pb-1 text-black">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full py-1 px-2 text-black rounded-md bg-beige border border-black outline-none focus:ring-0 focus:border-black"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button className="rounded-md px-5 py-2 border-2 text-xl bg-black font-semibold border-black shadow-lg hover:bg-transparent text-beige hover:text-black duration-300 cursor-pointer active:scale-[0.98]">
                <a href="#">Enviar mensaje</a>
              </button>
            </div>
          </form>


        </div>
      </div>
    </section>
  )
}

export default FormContact