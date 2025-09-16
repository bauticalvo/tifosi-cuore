import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import useLoginStore from "../../store/User/useLoginStore";


export const MenuEntreprenuer = ({ setOpenMenu }) => {
  const navigate = useNavigate();
  const { login }= useLoginStore()

  const NavButton = ({ text, link }) => {
    return (
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.95)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="w-full max-w-xs font-semibold px-6 py-4 text-white rounded-lg bg-ascensor/80 shadow-lg hover:shadow-ascensor/50 transition-all duration-300"
        onClick={() => {
          navigate(link);
          setOpenMenu(false);
        }}
      >
        {text}
      </motion.button>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-sm z-500 overflow-hidden"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="relative w-full h-full flex flex-col items-center justify-center p-8"
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-ascensor transition-colors duration-200"
            onClick={() => setOpenMenu(false)}
          >
            X
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center space-y-4 w-full max-w-md"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Menú Principal</h2>
            
            <NavButton text={"Inicio"} link={"/de-busca-a-businessman"} />
            <NavButton text={"Que es DBB"} link={"/landing"} />
            <NavButton text={"Diagnóstico"} link={"/diagnosis"} />
            <NavButton text={"Tienda"} link={"/shop"} />
            <NavButton text={"Contacto"} link={"/contact"} />
            {login ? (
              <NavButton text={"Mi Perfil"} link={"/profile"} />
            ) : (
              <NavButton text={"Iniciar sesión"} link={"/login"} />
            )}

            
            <div className="w-full border-t border-white/20 mt-8 pt-6">
              <p className="text-white/70 text-center">El Ascensor MKT - 2025</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};