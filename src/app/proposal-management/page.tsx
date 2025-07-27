'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FeatureSection from '@/components/FeatureSection';
import HomeButton from '@/components/HomeButton';

export default function ProposalSystemPage() {

  useEffect(() => {
    const scrollLink = document.getElementById('scroll-to-features');
    const featuresSection = document.getElementById('features');

    if (scrollLink && featuresSection) {
      const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        
        featuresSection.scrollIntoView({
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
    <main className="relative min-h-screen bg-gradient-to-b from-[#1f2445] to-[#3B3C6E] text-white font-sans overflow-x-hidden scroll-smooth">
      <HomeButton />
      {/* Hero Section */}
      <section className="h-[95vh] relative flex flex-col items-center justify-center text-center p-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            LLM Proposal Management System
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            This is a placeholder for a catchy subtitle. Explain how this system automates and streamlines the proposal creation process.
          </p>
          <a 
            href="https://github.com/arifabds/LLM_Tabanli_Teklif_Sistemi" 
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-transform hover:scale-105"
          >
            View on GitHub
          </a>
        </div>

        <a id="scroll-to-features" href="#features" className="absolute bottom-8 cursor-pointer">
          <svg className="w-10 h-10 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </section>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-8 py-16">
        <FeatureSection
          imageSide="left"
          imageUrl="/images/ss_4.png"
          title="Intelligent Template Extraction from Documents"
          description="Stop wasting time on manual template creation. Upload your existing proposal documents (PDF/DOCX), and let the AI handle the rest. Our advanced language models analyze unstructured text to automatically identify key sections like headers, paragraphs, and fillable fields, generating a structured, reusable, and intelligent template for you in seconds."
        />
        <FeatureSection
          imageSide="right"
          imageUrl="/images/ss_5.png"
          title="Context-Aware Content Generation with RAG"
          description="Powered by a Retrieval-Augmented Generation (RAG) architecture, our AI thinks within the context of your custom templates, not just with generic knowledge. Simply provide a brief prompt, and the system will automatically populate each section of your template with consistent, professional, and contextually accurate content, resulting in tailor-made, error-free, and persuasive proposal drafts."
        />
        <FeatureSection
          imageSide="left"
          imageUrl="/images/ss_6.png"
          title="Secure, Version-Controlled, and Collaborative Platform"
          description="This platform does more than just generate content—it manages the entire proposal lifecycle. Your data is secured with JWT-based authentication and role-based access control (Analyst, Customer). Every change is versioned and comparable with previous iterations (diff-tracking). You can receive real-time feedback and suggestions from clients, managing the entire process with complete transparency and control."
        />
      </div>

      {/* Footer Section */}
      <footer className="text-center p-8 mt-16 border-t border-white/10">
        <div className="container mx-auto">
          <p className="mb-4">© 2025 All rights reserved.</p>
          <nav className="flex justify-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Back to Home</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}