import Image from "next/image"
import { Button } from "../buttons/button"
import { AiOutlineArrowRight, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
import { Icons } from "./Icon"


export const Contact = () => {
    return (
        <section className=" lg:p-10 py-12 px-6" id="contact">
            <div className="flex flex-col justify-between items-center gap-8 p-16 lg:gap-32 bg-purple-950/20 md:flex-row">
                <div className="flex flex-col ">
                    <Image src="/imagens/avatar.svg" alt="foto de perfil" width={160} height={160} className="pb-10"/>
                    <p className="font-heebo text-emerald-500 pb-2">Contact</p>
                    <h2 className="font-heebo pb-2">Gostou do meu trabalho? Vamos trabalhar juntos</h2>
                    <p>Estou sempre pronto para bater um papo. Envie-me um e-mail para <a href="#" className="text-emerald-500">mfml10017@.com</a> ou ligue para mim nas redes sociais.</p>
                    <div className="flex gap-2 my-2">
                        <a href="https://github.com/Matheusleal05/Matheusleal05"  target="_blank"><Icons icon={<AiFillGithub size = {24} className = "text-white"/>}/></a>
                        <a href="https://www.linkedin.com/in/matheus-felipe-b98203284/" target="_blank"><Icons icon={<AiFillLinkedin size = {24} className = "text-white "/>}/></a>
                        <a href="https://www.instagram.com/matheus_leal005/" target="_blank"><Icons icon={<AiOutlineInstagram size = {24} className = "text-white"/>}/></a>
                    </div> 
                </div>
                <div className="w-full flex flex-col justify-start gap-4 md:w-[592px]">
                    <form className="flex flex-col gap-4 ">
                    <input type="text" placeholder="Nome" className=" text-white rounded-lg px-4 py-2 bg-[#171023] font-bold focus:outline-none focus:outline-violet-500 " />
                    <input type="email" name="email" id="email" placeholder="E-mail" className="text-white rounded-lg px-4 py-2 bg-[#171023] font-bold focus:outline-none focus:outline-violet-500"/>
                    <textarea id="mensagem" placeholder="Digite sua mensagem" className="text-white p-2 focus:outline-none focus:outline-violet-500 font-bold  resize-none  rounded-md  bg-[#171023]"></textarea>
                    </form>
                <div className="gap-2">
                <Button className="flex  items-center justify-center px-6 py-4 gap-2 rounded-lg bg-violet-700 text-white hover:bg-violet-500 ease-in duration-500 shadow-button"> Envie sua mensagem <AiOutlineArrowRight size = {24} /></Button>
                </div>
                </div>
            </div>
        </section>
    )
}