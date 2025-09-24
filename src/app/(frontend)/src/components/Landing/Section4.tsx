import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlideCarousel } from '../Custom/SlideCarousel'

export const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [activeCard, setActiveCard] = useState(null)

  const data = [
    {
      id: 1,
      image: '/acmilan.png',
    },
    {
      id: 2,
      image: '/barca.jpeg',
    },
    {
      id: 3,
      image: '/milanstreet.jpeg',
    },
  ]
  return (
    <div className="h-screen w-screen flex flex-col items-center  bg-primary relative">
      <section className="w-full h-[35px] md:h-[50px] flex justify-between items-center px-8">
        <h1 className="text-light flex items-center text-xl md:text-2xl">Nuevos lanzamientos</h1>
      </section>
      <section className="relative">
        <SlideCarousel slides={data} setCurrentIndex={setCurrentIndex} />
        <div className="flex flex-col items-center justify-center space-y-8 absolute bottom-2 w-full z-20">
          <div className="flex space-x-10 items-center justify-center bg-accent px-1 py-1 rounded-full">
            {data.map((item, index) => (
              <motion.button
                className={` w-2 h-2 text-center flex items-center justify-center rounded-full
                      ${currentIndex === index ? 'bg-light  ' : 'bg-light/50'}`}
                key={index}
                animate={{
                  scale: currentIndex === index ? 1 : 1, // Hace un leve zoom si está activo
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                onClick={() => setCurrentIndex(index)}
              ></motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
