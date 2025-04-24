import { useState } from 'react';
import { send } from 'emailjs-com';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await send('service_id', 'template_id', form, 'user_token');
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const Button = ({ children, className = '', ...props }) => (
    <button
      className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-[80vh] flex flex-col justify-center items-center text-white px-4 text-center relative"
        style={{ backgroundImage: 'url(/hero.png)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            Conectamos emociones
            <br />
            Animamos momentos.
          </h1>
          <Button onClick={scrollToContact} className="mt-6 text-lg shadow-lg">
            Cotiza tu evento
          </Button>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="px-4 py-16 text-center bg-black">
        <h2 className="text-3xl font-bold mb-4 text-white">¿Quiénes somos?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-300">
          Somos GALO: Comunicación con estilo propio. Más que un servicio, somos animación, cobertura audiovisual y asesoría comunicacional para todo tipo de públicos, empresas, clubes y organizaciones.
        </p>
        <Button>Conócenos</Button>
      </section>

      {/* Servicios destacados */}
      <section className="bg-gray-900 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Servicios Destacados</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              img: '/event-host.jpg',
              title: 'Animación de eventos',
              desc: 'Ferias, ceremonias, aniversarios, lanzamientos.',
            },
            {
              img: '/audiovisual.jpg',
              title: 'Cobertura audiovisual',
              desc: 'Registro profesional con edición y entrega.',
            },
            {
              img: '/communication.jpg',
              title: 'Comunicación estratégica',
              desc: 'Conducción de programas, vocerías, hostings.',
            },
            {
              img: '/community.jpg',
              title: 'Intervenciones comunitarias',
              desc: 'Colegios, adultos mayores, jóvenes y más.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section id="contacto" className="py-20 px-4 bg-black">
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              type="email"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensaje"
              rows={4}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
              required
            ></textarea>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
            {success && <p className="text-green-400 mt-2">¡Mensaje enviado con éxito!</p>}
          </form>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a
  href="https://wa.me/56963108912"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg z-50"
  aria-label="Chat por WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16.003 3.2a12.8 12.8 0 00-11.096 19.372L3.2 28.8l6.526-1.707A12.8 12.8 0 1016.003 3.2zm0 23.04a10.24 10.24 0 01-5.226-1.454l-.374-.221-3.873 1.014 1.034-3.772-.244-.387a10.24 10.24 0 1118.097-5.18 10.215 10.215 0 01-10.414 9zM22.23 18.48c-.31-.155-1.835-.906-2.12-1.007-.283-.102-.489-.155-.695.156-.204.31-.798 1.006-.979 1.211-.181.206-.36.23-.67.078-.31-.154-1.308-.481-2.49-1.53-.92-.82-1.541-1.833-1.72-2.144-.18-.31-.02-.479.136-.634.14-.14.31-.36.465-.54.154-.18.204-.31.31-.516.102-.204.05-.387-.025-.54-.077-.154-.693-1.675-.95-2.29-.248-.595-.5-.513-.695-.523-.18-.008-.387-.01-.594-.01s-.54.078-.822.387c-.283.309-1.08 1.053-1.08 2.563 0 1.51 1.107 2.967 1.26 3.172.154.204 2.181 3.33 5.285 4.674.74.319 1.318.51 1.768.652.743.236 1.42.204 1.953.124.596-.089 1.835-.748 2.095-1.47.26-.722.26-1.34.181-1.47-.077-.129-.28-.204-.59-.36z" />
  </svg>
</a>
    </div>
  );
}
