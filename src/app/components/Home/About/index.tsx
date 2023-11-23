import Image from "next/image"
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import { AiFillRead } from "react-icons/ai"
import { Button } from "../buttons/button"

export const About = () => {
    return (
        <section className="bg-[#171023] p-10" id="about">
            <div className="p-16 flex flex-col items-center justify-center gap-32 bg-purple-950/20 rounded-xl md:flex-row">
                <div className="lg:w-auto h-auto">
                    <Image src='/imagens/aboutIMg.svg' alt="imagem" width={400} height={400} />
                </div>
                <div>
                <div className="flex  gap-6 pb-4">
                    <BiLogoJavascript size = {24} className = "text-yellow-500"/>
                    <BiLogoReact size = {24} className = "text-blue-500"/>
                    <TbBrandNextjs size = {24} className = "text-white"/>
                    <BiLogoTailwindCss size = {24} className = "text-blue-500"/>
                </div>
                <div className="max-w-[590px]">
                    <p className="pb-2 text-emerald-500">About me</p>
                    <h2 className="pb-2 font-heebo">Sou um desenvolvedor de software em busca de minha primeira oportunidade </h2>
                    <p className="pb-4 font-heebo  md:pb-4 sm:pb-4">Me chamo Matheus, meu primeiro contato com progamação foi em 2022, desde já venho melhorando minhas habilidades e sempre buscando por novos conhecimentos.</p>
                    <p className="pb-2 font-heebo  md:pb-4 sm:pb-4">Meu foco é aprender coisas novas que vão me ajudar a desenvolver mais na minha aréa e aprimorar as habilidades que possuo.</p>
                    <div className="py-4">
                    <Button className="flex  items-center justify-center px-6 py-4 gap-2 rounded-lg bg-violet-700 text-white hover:bg-violet-500 ease-in duration-500 shadow-button"><AiFillRead size = {24} />Meu resumo</Button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}