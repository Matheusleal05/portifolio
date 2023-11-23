import Image from "next/image"
import { Button } from "../buttons/button"
import { AiFillRead, AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"


export const HeroSection = () => {
    return (
        <section className="h-full mx-auto">
            <div className="w-full px-28 py-24 flex flex-col-reverse items-center justify-center gap-6  md:flex-row lg:gap-32">

                <div className=" flex flex-col items-center justify-center  gap-8 lg:max-w-[592px]">
                <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-[#7bffaf]">Olá, Eu sou Matheus</h1>
                <h2 className="font-heebo">Desenvolvedor web front-end</h2>
                <p className="font-heebo sm:text-center">Sou um desenvolvedor web front-end. Desenvolvo páginas e sistemas web responsívos, com foco em componentes reutilizaveis e otimizados.</p>
                <div className="flex gap-4">
                <Button>
                     <AiFillRead size = {24}/> 
                      <Link href="/Resumo">Meu Resumo</Link>
                     </Button>
                <Button className="flex  items-center justify-center px-6 py-4 gap-2 rounded-lg bg-violet-700 text-white hover:bg-violet-500 ease-in duration-500 shadow-button"><a href="#contact"> Fale comigo </a><AiOutlineArrowRight size = {24} /></Button>
                </div>
                </div>

                <div className="w-[400px] h-auto  md:w-full lg:h-auto ">
                    <Image src='/imagens/programador.svg' alt="foto" width={400} height={400} />
                </div>

            </div>
        </section>
    )
}