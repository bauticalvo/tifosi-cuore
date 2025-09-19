'use client'
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md'
export const Section2 = () => {
  const StyledTitle = 'text-light flex items-center text-xl md:text-2xl'

  return (
    <div className="bg-primary h-auto w-full flex flex-col items-center justify-center">
      <section className="w-full h-[35px] md:h-[50px] flex justify-between items-center px-8 border-y border-light">
        <h1 className={StyledTitle}></h1>
        <h1 className={StyledTitle}>
          Nuevos lanzamientos <MdOutlineSubdirectoryArrowRight className="ml-2 -rotate-90" />
        </h1>
      </section>
      <section className="w-full h-[70px] md:h-[100px] flex flex-col justify-center items-center">
        <h1 className="text-sm md:text-md text-light">Bienvenidos a Tifosi Cuore</h1>
        <h1 className={StyledTitle}>Explora nuestro catálogo</h1>
      </section>
    </div>
  )
}
