import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterModal } from "./FooterModal";
import { bautiLink } from "../../utils/data";
import { instagramProfile } from "../../Constants/contactData";



export const Slider_2 = () => {

    const [textReveal, setTextReveal] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const { t } = useTranslation();


    useEffect(() => {
      // Revelar textos secuencialmente
      const timer1 = setTimeout(() => setTextReveal(1), 500)
      const timer2 = setTimeout(() => setTextReveal(2), 1500)
      const timer3 = setTimeout(() => setTextReveal(3), 2500)
  
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }, [])
  
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

    
const variants = {
    initial: { x: 0, width: "0%" },
    hovered: { x: 0,width: "100%" },
  };

    return (
        <main className="flex flex-col w-screen h-auto lg:h-screen overflow-hidden bg-black text-white justify-evenly  items-center relative">
            <section className="flex flex-col  items-center justify-center text-center h-auto w-full py-10"> 
            <div className="max-w-[90vw] w-full">
                {/* Primer bloque de texto */}
                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: textReveal >= 1 ? 1 : 0, y: textReveal >= 1 ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl 2xl:text-6xl text-white font-semibold leading-tight text-center md:text-left">
                    {t("Footer.text1")} <br className="hidden md:block" />
                    {t("Footer.text2")}<span className="tex t-ascensor"> {t("Footer.text3")}</span>.
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mt-6 font-semibold text-center md:text-left">
                    {t("Footer.text4")}
                    </p>
                </motion.div>

                {/* Segundo bloque de texto */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: textReveal >= 2 ? 1 : 0, y: textReveal >= 2 ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                    <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-white font-semibold leading-tight mb-6 md:mb-0 text-center md:text-left md:max-w-2xl">
                       {t("Footer.text5")} <br />
                        {t("Footer.text6")} <span className="text-ascensor">{t("Footer.text7")}</span>.
                    </h2>

                    <div className="w-px h-16 bg-zinc-800 mx-8 hidden md:block" />

                    <div className="text-2xl md:text-3xl text-white font-semibold text-center md:text-right">
                        {t("Footer.text8")} <br />
                        {t("Footer.text9")}
                    </div>
                    </div>
                </motion.div>

                {/* Línea decorativa inferior */}
                <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-ascensor to-transparent mt-16"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                />
                </div>
            </section>
            <section className="flex flex-row  items-center justify-between text-start h-auto max-w-[90vw] w-full ">
                <div className="relative flex flex-col space-y-4 items-start justify-start  w-full">
                        <motion.button 
                            className="relative px-6 text-lg 2xl:text-3xl font-semibold text-boton text-start w-2/12 max-2xl:w-1/2"
                            initial="initial"
                            whileHover="hovered"
                            onClick={() => window.open(instagramProfile, "_blank")}
                        >
                            <span className="relative z-10">Instagram
                            <motion.span
                                className="absolute bottom-0 left-0 h-1 w-0 bg-boton"
                                variants={variants}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            /></span>
                        </motion.button>
                        <motion.button 
                            className="relative px-6 text-lg 2xl:text-3xl font-semibold text-boton text-start w-2/12 max-2xl:w-1/2"
                            initial="initial"
                            whileHover="hovered"
                        >
                            <span className="relative z-10">WhatsApp
                            <motion.span
                                className="absolute bottom-0 left-0 h-1 w-0 bg-boton"
                                variants={variants}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            /></span>
                        </motion.button>
                        <motion.button 
                            className="relative px-6 text-lg font-semibold text-start text-boton 2xl:text-3xl "
                            initial="initial"
                            whileHover="hovered"
                            onClick={() => setOpenModal(true)}
                        >
                            <span className="relative z-10">{t("Footer.contact")}	
                            <motion.span
                                className="absolute bottom-0 left-0 h-1 w-0 bg-boton"
                                variants={variants}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            /></span>
                        </motion.button>
                </div>
                <span className="relative p-4 text-white text-sm font-semibold">
                    ©2025 Realizado por <BautiSpan /> 
                </span>
            </section>
            {openModal && (
                <FooterModal setOpenModal={setOpenModal} />
            )} 
        </main>
    )
}