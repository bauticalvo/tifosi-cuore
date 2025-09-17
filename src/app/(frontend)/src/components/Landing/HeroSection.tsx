import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSimpleScrollOpacity } from '../../hooks/useScrollOpacity'

gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<number>(0)
  const opacity = useSimpleScrollOpacity(50)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Crear un timeline para control preciso
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=200%', // Scroll más largo para efecto más gradual
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            progressRef.current = self.progress
          },
        },
      })

      // Animación no lineal - se hace más lenta progresivamente
      tl.to(
        textRef.current,
        {
          y: 400,
          ease: 'none', // Control manual del easing
          modifiers: {
            y: (y) => {
              // Fórmula para easing exponencial - se hace más lento al final
              const progress = progressRef.current
              const easedProgress = 1 - Math.pow(1 - progress, 2) // easeOutQuad
              return `${easedProgress * 400}px`
            },
          },
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-tertiary relative h-[60vh] w-full flex items-center justify-center bg-[url('/hero-bg.png')] bg-no-repeat bg-top bg-cover overflow-hidden">
      {/* Imagen con parallax más lento */}
      <img
        style={{ opacity, transition: 'opacity 0.3s ease' }}
        src="/bloke_core.png"
        alt="bloke_core"
        className="h-full object-cover object-top w-full z-20 absolute inset-0"
      />

      {/* Texto con parallax más pronunciado */}
      <section ref={textRef} className="absolute top-1/2 right-1/12 transform z-10 text-left">
        <h1
          className="text-[clamp(60px,15vw,230px)] text-transparent font-bold leading-[1] tracking-wide"
          style={{
            WebkitTextStroke: '2px #275559', // Primer borde (externo)
            textShadow: `
              4px 4px 0px #f0efd6,   /* Segundo borde */
              -4px -4px 0px #f0efd6,
              4px -4px 0px #f0efd6,
              -4px 4px 0px #f0efd6
            `,
          }}
        >
          <span className="block">TIFOSI</span>
          <span className="block mt-4">CUORE</span>
        </h1>
      </section>

      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>
    </div>
  )
}
