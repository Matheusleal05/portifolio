'use client'

import { useState } from "react"
import { NavItems } from "./NavItem"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { MobileItems } from "./MobileItems"

export const Header = () => {
    const Nav_items = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'Projects',
            href: '#projects'
        },
        {
            name: 'Contact',
            href: '#contact'
        },
        
    ]
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        
        <header className="fixed top-0 z-[100] w-full py-4 px-20 h-20 shadow-lg shadow-[rgba(0, 0, 0, 0.25)]flex justify-center items-center">
            <div className="flex items-center justify-between ">
                <a href="/" className="text-white text-2xl uppercase font-semibold py-2">Matheus Leal</a>
                <nav className="hidden md:flex items-center">
                    {Nav_items.map(item =>(
                        <NavItems {...item} key={item.name}/>
                    )
                    )}
                </nav>
                <div onClick={handleNav} className="md:hidden cursor-pointer ">
                    { nav ? <AiOutlineClose size = {24} className = "text-white ease-linear duration-500"/> : <AiOutlineMenu size = {24} className = "text-white ease-in duration-500"/>}
                </div>
                
            </div>

            <div className={
                nav? "md:hidden absolute right-0  w-[80%]  md:w-[70%] h-[756px] bg-[#2C243B] ease-in duration-500"

                : "md:hidden absolute right-[-100%] w-[80%] h-[756px] ease-in duration-500"
                }>

                <nav className="flex flex-col items-end py-6 px-16">
                    {Nav_items.map( item=> (
                        <MobileItems {...item} key={item.name}/>
                    ))}
                <div className=" w-full  h-[1px] bg-[#413A4F]"></div>
                </nav>
            </div>
        </header>
        
    )
}