// src/app/portfolio/page.tsx

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillIcon from '@/components/SkillIcon';
import HomeButton from '@/components/HomeButton';
import { FaPython, FaReact, FaDocker, FaGitAlt, FaJava, FaRust } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiGo } from "react-icons/si";


const projects = [
  {
    title: 'AI-Powered Content Generator (Chrome Extension)',
    description: 'A browser extension that leverages LLMs to generate original content from any webpage. It features a resilient, dual-mode data scraping architecture to bypass anti-bot measures and includes a comprehensive A/B testing and analysis platform using an LLM-as-a-Judge methodology.',
    imageUrl: '/images/ss_1.png',
    tags: ['Python', 'Vanilla JS', 'HTML/CSS', 'Flask', 'RAG', 'PostgreSQL'],
    liveUrl: 'https://chromewebstore.google.com/detail/llm-based-content-generat/cpngfebnonodehhbnjmcjdjhbfjjgikb',
    githubUrl: 'https://github.com/arifabds/LLM_Integrated_Chrome_Extension'
  },
  {
    title: 'LLM Proposal Management System',
    description: 'Developed during a professional internship, this system automates business proposal generation. It analyzes existing documents to create custom user templates and uses RAG to produce context-aware drafts, significantly streamlining the workflow.',
    imageUrl: '/images/ss_7.png',
    tags: ['Python', 'Flask', 'Next.js', 'React Query', 'PostgreSQL', 'Alembic', 'RAG'],
    githubUrl: 'https://github.com/arifabds/LLM_Tabanli_Teklif_Sistemi'
  },
  {
    title: 'LLM Remote Assistant (In Progress)',
    description: 'An ambitious full-stack project to control a PC remotely via natural language. The core vision involves an LLM that dynamically generates and executes secure Python scripts in a sandboxed environment, controlled by a cross-platform mobile client.',
    imageUrl: 'https://placehold.co/600x400/2e2e46/FFFFFF?text=In+Progress',
    tags: ['Flutter', 'Java', 'Go', 'Rust', 'Python', 'LLM', 'WebSocket', 'System Automation', 'Security'],
    githubUrl: 'https://github.com/arifabds/LLM-Remote-Assistant'
  },
  {
    title: 'Site-Chat: A B2B/B2C Live Chat SaaS',
    description: 'Architecting a real-time chat application allowing users to create public/private chat rooms on any URL. This dual-purpose SaaS platform serves individual users (B2C) and provides an embeddable widget for businesses (B2B) to foster community directly on their websites.',
    imageUrl: 'https://placehold.co/600x400/4a2e10/FFFFFF?text=In+Development',
    tags: ['Go', 'Next.js', 'React', 'TypeScript', 'WebSocket', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/arifabds/site-chat'
  },
];

export default function PortfolioPage() {
  useEffect(() => {
    const scrollLink = document.getElementById('scroll-to-about');
    const aboutSection = document.getElementById('about');

    if (scrollLink && aboutSection) {
      const handleClick = (event: MouseEvent) => {
        event.preventDefault();

        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      };

      scrollLink.addEventListener('click', handleClick);

      return () => {
        scrollLink.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e2e46] to-[#3a4258] text-white font-sans overflow-x-hidden">
      <HomeButton />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Arif Emre Abduşoğlu
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            AI Product Developer | LLM-powered SaaS Tools | Computer Engineer
          </p>
          <button
            id="scroll-to-about"
            className="px-8 py-4 bg-slate-600/50 border border-slate-400/50 rounded-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-slate-500/50 hover:border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            View My Work
          </button>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="container mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-slate-300 leading-relaxed">
          <p>I am a product-focused Computer Engineer with a deep passion for leveraging AI and Large Language Models (LLM) to transform complex ideas into functional, user-centric digital products. My focus lies in managing the entire end-to-end development process, from initial concept and backend architecture to polished frontend interfaces and cloud deployment. I thrive on turning new technologies into tangible prototypes that solve real-world problems.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} imageSide={index % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="container mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto"> {/* max-w-3xl -> max-w-4xl olarak genişletildi */}
          <SkillIcon name="Python"><FaPython size={40} color="#3776AB" /></SkillIcon>
          <SkillIcon name="TypeScript"><SiTypescript size={40} color="#3178C6" /></SkillIcon>
          <SkillIcon name="Go"><SiGo size={40} color="#00ADD8" /></SkillIcon>
          <SkillIcon name="Java"><FaJava size={40} color="#f89820" /></SkillIcon>
          <SkillIcon name="Rust"><FaRust size={40} color="#DEA584" /></SkillIcon>
          <SkillIcon name="PostgreSQL"><SiPostgresql size={40} color="#4169E1" /></SkillIcon>
          <SkillIcon name="React"><FaReact size={40} color="#61DAFB" /></SkillIcon>
          <SkillIcon name="Next.js"><SiNextdotjs size={40} /></SkillIcon>
          <SkillIcon name="Docker"><FaDocker size={40} color="#2496ED" /></SkillIcon>
          <SkillIcon name="Git"><FaGitAlt size={40} color="#F05032" /></SkillIcon>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team.
        </p>
        <a href="mailto:arifabdusoglu0016@gmail.com" className="inline-block px-8 py-4 bg-slate-600/50 border border-slate-400/50 rounded-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-slate-500/50 hover:border-slate-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 mt-16 border-t border-slate-800">
        <div className="container mx-auto">
          <p className="mb-4 text-slate-500">© 2025 Arif Emre Abduşoğlu. All rights reserved.</p>
          <nav className="flex justify-center gap-6">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Back to Landing</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}