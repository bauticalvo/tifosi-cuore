import { perfiles } from "../../utils/perfiles"
import { Card } from "./Card"



export const Slider_1 = () => {

    return (
        <main className="flex w-[166vw] overflow-hidden max-lg:w-screen h-auto max-lg:flex-col ">
            {perfiles.map((perfil) => (
                <Card 
                    key={perfil.id} 
                    slide={1}
                    index={perfil.id} 
                    image={perfil.image} 
                    name={perfil.name}
                    description={perfil.description}
                />
            ))}
        </main>
    )
}