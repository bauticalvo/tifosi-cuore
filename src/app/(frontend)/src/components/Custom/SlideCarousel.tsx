'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useRef, useEffect, useState } from 'react'

type Slide = {
  id: number
  image: string
}

type SlideCarouselProps = {
  slides: Slide[]
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}

export const SlideCarousel = ({ slides, setCurrentIndex }: SlideCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const x = useMotionValue(0)
  const currentSlide = useTransform(x, [-width, 0], [slides.length, 0])

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [slides])

  // Actualizar índice cuando cambie la posición
  useEffect(() => {
    const unsubscribe = currentSlide.on('change', (latest) => {
      const index = Math.abs(Math.round(latest)) % slides.length
      setCurrentIndex(index)
    })

    return () => unsubscribe()
  }, [currentSlide, slides.length, setCurrentIndex])

  return (
    <div className="relative w-screen overflow-hidden">
      <motion.div
        ref={carouselRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      >
        {[...slides, ...slides].map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            className="w-[30vw] h-auto lg:w-[500px] lg:h-[600px]  flex-shrink-0"
          >
            <div
              className="w-full h-full relative"
              onPointerDown={(e) => {
                // Cuando se hace click en la imagen, iniciar drag del carousel
                e.preventDefault()
                const carousel = carouselRef.current
                if (carousel) {
                  carousel.setPointerCapture(e.pointerId)
                }
              }}
            >
              <img
                src={card.image}
                alt={`slide-${card.id}`}
                className="w-full h-full object-cover border border-light  select-none"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
