
// Portfolio React + GSAP + Tailwind
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const headlineRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    gsap.from(headlineRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.section', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, [])

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Header */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl font-bold tracking-tight text-purple-500 mb-4"
        >
          Nyan Araújo
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl text-gray-300">
          Designer. Art Director. Explorer of ideas, pixels and AI.
        </p>
      </section>

      {/* Sobre */}
      <section ref={aboutRef} className="section px-6 py-20 bg-gray-900">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">Sobre Mim</h2>
        <p className="max-w-3xl text-gray-300">
          Criativo multidisciplinar com foco em SaaS, inovação, design estratégico e arte generativa. Experiência com UI/UX, branding, campanhas e projetos educacionais. Ferramentas: Midjourney, Veo, Canva, Figma, HTML/CSS e mais.
        </p>
      </section>

      {/* Projetos */}
      <section ref={projectsRef} className="section px-6 py-20 bg-gray-800">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="Box Delivery" role="UI/UX Designer" />
          <ProjectCard title="Cartartica" role="Founder & Diretor Criativo" />
          <ProjectCard title="HireLatam" role="Design Gráfico & Vídeo" />
          <ProjectCard title="Campanhas" role="Beats, Genial, Fusion, Antarctica" />
        </div>
      </section>

      {/* Experiência */}
      <section ref={experienceRef} className="section px-6 py-20 bg-gray-900">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">Experiência</h2>
        <ul className="space-y-4 text-gray-300">
          <li><b>2024–2025</b> — HireLatam (Design Gráfico, Web e Vídeo)</li>
          <li><b>2023–2024</b> — Cartartica (Founder & Diretor Criativo)</li>
          <li><b>2022–2023</b> — Box Delivery (UI/UX Designer)</li>
        </ul>
      </section>

      {/* Contato */}
      <section ref={contactRef} className="section px-6 py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold text-purple-400 mb-4">Contato</h2>
        <p className="text-gray-300 mb-4">Vamos criar algo incrível juntos?</p>
        <a
          href="mailto:nyanaraujo@gmail.com"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
        >
          Fale comigo
        </a>
      </section>
    </div>
  )
}

function ProjectCard({ title, role }) {
  return (
    <div className="bg-black border border-purple-500 p-6 rounded-xl hover:scale-105 transition transform">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  )
}
