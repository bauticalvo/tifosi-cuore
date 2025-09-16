'use client'
import FilterBar from './FilterBar'
import { OverHeader } from './OverHeader'

export const Header = () => {
  //   const CartButton = () =>{

  //     return (
  //         <button
  //           onClick={() => setIsCartOpen(true)}
  //           className="flex space-x-2 text-ascensor/90 text-xl items-center">
  //           <FaShoppingCart className="" />
  //           <span className="">{cart.length}</span>
  //         </button>
  //     )
  //   }

  return (
    <header className="fixed top-0 z-1000 text-white bg-primary flex flex-col justify-between  items-center w-full   text-base  ">
      <section className="h-[2vh] flex items-center justify-center">
        <OverHeader />
      </section>
      <section className="border-y border-light w-full h-[7vh] py-1 px-8">
        <img src="/logo_acortado.svg" alt="tifosi_logo" className="h-full w-auto" />
      </section>
      <section className="w-full h-[4vh]">
        <FilterBar />
      </section>
    </header>
  )
}
