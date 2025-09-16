import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { instagramProfile, whatsappNumber, youtubeProfile } from '../../Constants/contactData';
import { bautiLink } from '../../utils/data';
import useLoginStore from '../../store/User/useLoginStore';

export const FooterEntreprenuer = () => {
  const navigate = useNavigate();
  const { login }= useLoginStore()

  const NavItem = ({ text, path }) => (
    <button 
      onClick={() => navigate(path)}
      className="text-grey1 hover:text-ascensor transition-colors"
    >
      {text}
    </button>
  );

      const BautiSpan = () => {
        return (
            <span 
                className='text-bauti cursor-pointer '
                onClick={() =>{
                    window.open(bautiLink)
                }}
                >
                    J.B.CALVO
                </span>
        )
    }

  return (
    <footer className="bg-surface border-t border-grey1/20 text-light">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start">
          <img 
            src="/Logos/logo_3.png" 
            alt="Logo El Ascensor" 
            className="w-18 h-auto mb-4"
          />
          <p className="text-grey1">
            Transformando emprendedores en businessmen
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-3 flex flex-col items-start">
              <NavItem text="Inicio" path="/" />
              <NavItem text="Diagnósticos" path="/diagnosis" />
              <NavItem text="Tienda" path="/shop" />
            </div>
            <div className="space-y-3 flex flex-col items-start">
              <NavItem text="Contacto" path="/contact" />
              <NavItem text="Blog" path="/blog" />
              {login ? (
                <NavItem text="Mi perfil" path="/profile" />
              ) : (
                <NavItem text="Iniciar sesión" path="/login" />
              )}

            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
          <div className="flex space-x-4">
            <a 
              href={instagramProfile}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-grey1 hover:text-ascensor transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a 
              href={youtubeProfile}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-grey1 hover:text-ascensor transition-colors text-2xl"
            >
              <FaYoutube />
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-grey1 hover:text-ascensor transition-colors text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="border-t border-grey1/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-grey1 text-sm">© 2025 El Ascensor. Todos los derechos reservados.</span>
          <span className="text-grey1 text-sm">Desarrollado por <BautiSpan/> </span>
        </div>
      </div>
    </footer>
  );
};