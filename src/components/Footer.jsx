import facebook from "../assets/facebook.svg"
import tiktok from "../assets/tiktok.svg"
import instagram from "../assets/instagram.svg"
import map from "../assets/map.svg"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import whatsapp from "../assets/whatsapp.svg"
import nequi from "../assets/nequi.svg"
import bancolombia from "../assets/bancolombia.svg"

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      {/* Suscripción */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¡No te pierdas nuestras ofertas!</h3>
            <p className="text-gray-300 mb-6">
              Suscríbete a nuestra lista de correo y recibe descuentos exclusivos y las últimas novedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <button className="bg-orange-500 text-white hover:bg-orange-600 font-semibold rounded-lg px-4 py-2">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de pagina */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl">
                ⚽
              </div>
              <h3 className="text-2xl font-bold">Regate_Col</h3>
            </div>
            <p className="text-gray-300">
              Tu tienda de confianza para camisetas de fútbol auténticas.
              Pasión, calidad y estilo en cada prenda.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61579342945338" target="_blank" className="text-white hover:text-orange-400 hover:bg-white/10 rounded-full p-2">
                <img src={facebook} className="h-5" />
              </a>
              <a href="https://www.instagram.com/regate_col" target="_blank" className="text-white hover:text-orange-400 hover:bg-white/10 rounded-full p-2">
                <img src={instagram} className="h-5" />
              </a>
              <a href="https://www.tiktok.com/@regate_col" target="_blank" className="text-white hover:text-orange-400 hover:bg-white/10 rounded-full p-2">
                <img src={tiktok} className="h-5" />
              </a>
              <a href={`https://wa.me/573023593478`} target="_blank" className="text-white hover:text-orange-400 hover:bg-white/10 rounded-full p-2">
                <img src={whatsapp} className="h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-900">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Camisetas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Equipos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Atención al Cliente */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-900">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-600 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img src={map} className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">Medellín, Colombia</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={phone} className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">+57 302 3593478</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={mail} className="h-5" />
                <span className="text-gray-600">regate_col@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Regate_Col. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <span className="text-sm text-gray-400">Métodos de pago:</span>
              <div className="flex space-x-2">
                <button className="bg-white/50 py-2 px-4 rounded-full cursor-pointer items-center justify-center">
                  <img src={bancolombia} className="h-6" />
                </button>
                <button className="bg-white/50 py-2 px-4 rounded-full cursor-pointer items-center justify-center">
                  <img src={nequi} className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;