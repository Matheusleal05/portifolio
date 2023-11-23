import Image from 'next/image'
import { Header } from './components/Header'
import { HeroSection } from './components/Home/Hero-section'
import { About } from './components/Home/About'
import { Projects } from './components/Home/Projects'
import { Contact } from './components/Home/Contact'
import Resumo from './components/Pages/page'


export default function Home() {
  return (
    <main className="w-full h-full">
      <Header/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
