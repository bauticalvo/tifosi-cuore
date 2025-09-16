import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



export const FooterModal = ({setOpenModal}) => {

    const [focusedField, setFocusedField] = useState(null)
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        user_name: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

      const CustomAlert = (icon, title, text)=>{
        Swal.fire({
          position: "top-end",
          icon: icon,
          title: title,
          text: text,
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          didOpen: (toast) => {
            toast.style.backgroundColor = "#fafafa"; // Fondo negro
            toast.style.color = "black"; // Texto blanco
            toast.style.border = "2px solid #F15A24"; // Borde con color personalizado
            toast.style.borderRadius = "10px"; // Bordes redondeados
            toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)"; // Sombra
          }
        });
      }

      const handleSubmit = () => {
        
        emailjs.send("service_75h7h99","template_9eosp2g", formData, 'yQNMeO1gaR9hfetMf')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            CustomAlert("success", t("Footer.success"), t("Footer.successText"));
          })
          .catch((err) => {
            console.log('FAILED...', err);
            CustomAlert("error", t("Footer.error"), t("Footer.errorText"));
          });
      };
    

    return (
      <main className="fixed flex items-center justify-center bg-black/70 w-screen h-screen z-20">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg relative w-full md:w-1/2  space-y-4">
        {/* Línea decorativa superior */}
        <div className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />

        {/* Elementos decorativos */}
        <div className="absolute top-6 right-6 opacity-10">
          <FaArrowUp size={60} className="text-[#FF5722]" />
        </div>

        <h2 className="text-xl font-bold text-center">{t("Footer.contact")}</h2>

        <div className="relative">
          <motion.div
            className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-[#FF5722]/0 via-[#FF5722] to-[#FF5722]/0"
            animate={{
              opacity: focusedField === "email" ? 1 : 0,
              background:
                focusedField === "email"
                  ? [
                      "linear-gradient(90deg, rgba(255,87,34,0) 0%, rgba(255,87,34,1) 50%, rgba(255,87,34,0) 100%)",
                      "linear-gradient(90deg, rgba(255,87,34,0) 10%, rgba(255,87,34,1) 50%, rgba(255,87,34,0) 90%)",
                    ]
                  : "",
            }}
            transition={{
              duration: 1.5,
              repeat: focusedField === "email" ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
            }}
          />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder={t("Footer.email")}
            required
            className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 text-white placeholder:text-zinc-500 relative z-10 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="relative">
          <motion.div
            className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-[#FF5722]/0 via-[#FF5722] to-[#FF5722]/0"
            animate={{
              opacity: focusedField === "message" ? 1 : 0,
              background:
                focusedField === "message"
                  ? [
                      "linear-gradient(90deg, rgba(255,87,34,0) 0%, rgba(255,87,34,1) 50%, rgba(255,87,34,0) 100%)",
                      "linear-gradient(90deg, rgba(255,87,34,0) 5%, rgba(255,87,34,1) 50%, rgba(255,87,34,0) 90%)",
                    ]
                  : "",
            }}
            transition={{
              duration: 1.5,
              repeat: focusedField === "message" ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            placeholder={t("Footer.message")}
            required
            rows={4}
            className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 pb-2 text-white placeholder:text-zinc-500 relative z-10 focus:outline-none focus:ring-0 resize-none"
          />
        </div>

        <section className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
          <button
            className="mt-4 text-white px-4 py-2 border border-boton rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:shadow-md"
            onClick={() => setOpenModal(false)}
          >
            {t("Footer.close")}
          </button>
          <button
            className="mt-4 text-white px-4 py-2 border border-boton rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:shadow-md"
            onClick={() => handleSubmit()}
          >
            {t("Footer.button")}
          </button>
        </section>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />
      </div>
    </main>
    )
}