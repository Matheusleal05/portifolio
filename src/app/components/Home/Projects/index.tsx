import { Cards } from "./cards"
import { BiLogoJavascript,  BiLogoReact } from "react-icons/bi"

export const Projects = () => {
    return (
        <section id="projects">
            <div className=" py-12 px-6 flex flex-col gap-10 lg:py-[112px] lg:px-[72px] md:px-10 md:py-16 sm:px-6 sm:py-8">
                <p className="text-center text-emerald-500">Projects</p>
                <h2 className="text-center">Dê uma olhada nos meus projetos em destaque</h2>
                <div className="flex flex-col items-center gap-8 sm:flex-row">

                <Cards img="/imagens/portifolioImg.png"creationDate="Nov - 23" title="Meu portifólio" description="Site desenvolvido para apresentar a mim e meus projetos" icon={<BiLogoJavascript size = {24} className = "text-yellow-500"/>}/>

                <Cards img="/imagens/portifolioImg.png"creationDate="Nov - 23" title="Meu portifólio" description="Site desenvolvido para apresentar a mim e meus projetos" icon={<BiLogoJavascript size = {24} className = "text-yellow-500"/>}/>
    
                <Cards img="/imagens/portifolioImg.png" creationDate="Dez - 23" title="Meu portifólio" description="Site desenvolvido para apresentar a mim e meus projetos" icon={<BiLogoJavascript size = {24} className = "text-yellow-500"/>}/>
                </div>
            </div>
        </section>
    )
}