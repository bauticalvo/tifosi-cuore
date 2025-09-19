'use client'

export const Section3 = () => {
  return (
    <div className="h-auto w-full flex flex-col md:flex-row">
      <section className="flex items-center justify-center w-full md:w-1/2 h-[400px] md:h-[800px] border-y-2 border-r-1 border-light group relative ">
        <img src="/barca.jpeg" alt="section3" className="w-full h-full object-cover" />
        <button className="absolute text-light z-10 text-lg 2xl:text-xl  bg-primary px-8 rounded-md group-hover:px-4 group-hover:bg-accent group-hover:text-light transition-all">
          LA liga
        </button>
      </section>
      <section className="flex items-center justify-center w-full md:w-1/2 h-[400px] md:h-[800px] border-y-2 border-l-1 border-light group relative ">
        <img src="/milanstreet.jpeg" alt="section3" className="w-full h-full object-cover" />
        <button className="absolute text-light z-10 text-lg 2xl:text-xl  bg-primary px-8 rounded-md group-hover:px-4 group-hover:bg-accent group-hover:text-light transition-all">
          Serie a
        </button>
      </section>
    </div>
  )
}
