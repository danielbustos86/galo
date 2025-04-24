import { useState, useEffect } from 'react';
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
  useEffect(() => {
    const video = document.querySelector('video');
    let interval;

    const restartVideo = () => {
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    };

    if (video) {
      interval = setInterval(() => {
        if (video.currentTime >= 10) {
          restartVideo();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, []);


  const Button = ({ children, className = '', ...props }) => (
    <button
      className={`bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ${className}`}
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
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 text-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video-animacion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Conectamos emociones.<br />Animamos momentos.
          </h1>
          <p className="text-lg mt-4 text-gray-300 max-w-xl mx-auto">
            Tu evento merece lo mejor. Nosotros lo hacemos inolvidable.
          </p>
          <Button onClick={scrollToContact} className="mt-8 text-lxag">
            Cotiza tu evento
          </Button>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="px-4 py-20 text-center bg-black">
  <h2 className="text-4xl font-bold mb-6">¿Quiénes somos?</h2>
  <p className="max-w-2xl mx-auto text-gray-400 text-lg">
    Somos GALO: Comunicación con estilo propio. Más que un servicio, somos animación, cobertura audiovisual y asesoría comunicacional para empresas, clubes, colegios y organizaciones.
  </p>
  <div className="mt-8 flex justify-center gap-6">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg className="w-8 h-8 fill-white hover:fill-blue-500 transition" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.2v-2.88h2.2v-2.2c0-2.18 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.17h-1.11c-1.1 0-1.45.68-1.45 1.38v1.7h2.46l-.39 2.88h-2.07v6.99A10 10 0 0 0 22 12z"/>
      </svg>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg className="w-8 h-8 fill-white hover:fill-pink-500 transition" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.43.41a4.91 4.91 0 0 1 1.78 1.03c.5.5.88 1.1 1.03 1.78.17.47.36 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.41 2.43a4.91 4.91 0 0 1-1.03 1.78c-.5.5-1.1.88-1.78 1.03-.47.17-1.26.36-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.43-.41a4.91 4.91 0 0 1-1.78-1.03 4.91 4.91 0 0 1-1.03-1.78c-.17-.47-.36-1.26-.41-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.96.41-2.43a4.91 4.91 0 0 1 1.03-1.78A4.91 4.91 0 0 1 5.5 2.68c.47-.17 1.26-.36 2.43-.41C8.42 2.21 8.8 2.2 12 2.2zM12 5.7a6.3 6.3 0 1 0 0 12.6 6.3 6.3 0 0 0 0-12.6zm0 10.4a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.5-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </a>
  </div>
</section>


      {/* Servicios destacados */}
      <section className="bg-gray-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Servicios Destacados</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { img: '/animacioneventos.jpeg', title: 'Animación de eventos', desc: 'Ferias, ceremonias, aniversarios, lanzamientos.' },
            { img: '/audivisual.png', title: 'Cobertura audiovisual', desc: 'Registro profesional con edición y entrega.' },
            { img: '/seccion3.png', title: 'Comunicación estratégica', desc: 'Conducción de programas, vocerías, hostings.' },
            { img: '/intervencioncomunitario.jpeg', title: 'Intervenciones comunitarias', desc: 'Colegios, adultos mayores, jóvenes y más.' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transform transition duration-300">
              <img src={item.img} alt={item.title} className="w-[280px] h-[190px] object-cover object-center mx-auto" />
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de contacto */}
      <section id="contacto" className="py-24 px-6 bg-black">
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-center">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-xl"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              type="email"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-xl"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensaje"
              rows={5}
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-xl"
              required
            ></textarea>
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
            {success && <p className="text-green-400 text-center">¡Mensaje enviado con éxito!</p>}
          </form>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/56963108912"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl z-50"
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
