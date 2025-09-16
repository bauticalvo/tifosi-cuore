import { motion } from "framer-motion";


export const Card = ({index, slide, image, name, description}) =>{


   

    return (
        <main className={`flex flex-col items-center justify-center h-screen w-1/3 
            max-lg:w-screen max-lg:h-1/2 
        ${index % 2 !== 0 ? 'bg-black text-ascensor' : 'bg-boton text-white'}`}>
            <section className="w-full  h-[50%] flex items-start justify-start p-3">
            <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={image}
                className="w-full h-auto"
                />
            </section>
            <section className="w-full h-[50%]">
                <div className="w-full h-2/3 flex items-center justify-center"></div>
                <div className="w-full h-1/3 flex flex-row space-x-2 items-end">
                    <div className="flex pl-4 pr-2  ">
                        <span className="text-9xl font-bold leading-none">{name.slice(0, 1)}</span>
                    </div>
                    <div className="flex flex-col justify-start py-4 ">
                        <h1 className="text-xl font-semibold">{name}</h1>
                        <p className="text-md font-semibold">{description}</p>
                    </div>
                </div>

            </section>
      

        </main>
    )
}