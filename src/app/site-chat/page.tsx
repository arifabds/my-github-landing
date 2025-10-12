'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FeatureSection from '@/components/FeatureSection';
import HomeButton from '@/components/HomeButton';

export default function SiteChatPage() {

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
    <main className="relative min-h-screen bg-gradient-to-b from-[#2c1a0b] to-[#4a2e10] text-white font-sans overflow-x-hidden scroll-smooth">
      <HomeButton />
      {/* Hero Section */}
      <section className="h-[95vh] relative flex flex-col items-center justify-center text-center p-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Site-Chat: Live Chat for Any Web Page
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A B2B/B2C SaaS platform enabling users to create public or private chat rooms for any URL, with an embeddable widget for businesses.
          </p>
        </div>

        {/* Aşağı kaydırma oku */}
        <a id="scroll-to-features" href="#features" className="absolute bottom-8 cursor-pointer">
          <svg className="w-10 h-10 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </section>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-8 py-16">
        <FeatureSection
          imageSide="left"
          imageUrl="https://placehold.co/600x400/2c1a0b/FFF?text=Instant+Chat+Rooms"
          title="Instant Chat Rooms on Any URL"
          description="Transform any webpage—be it a news article, a product listing, or a YouTube video—into a dynamic social space. Simply provide a URL to create a dedicated public or private chat room where users can discuss the content in real-time, fostering a community directly around the source."
        />
        <FeatureSection
          imageSide="right"
          imageUrl="https://placehold.co/600x400/4a2e10/FFF?text=Embeddable+Widget+for+Businesses"
          title="Seamless B2B Integration: The Embeddable Widget"
          description="Empower your own website with live community engagement. Our B2B solution provides a simple, lightweight, and customizable chat widget that can be embedded onto any site with just a few lines of code. Turn passive visitors into an active community, gather direct feedback, and increase user retention."
        />
        <FeatureSection
          imageSide="left"
          imageUrl="https://placehold.co/600x400/5e3a1f/FFF?text=Dual-Purpose+Platform"
          title="A Dual-Purpose Platform for B2C and B2B"
          description="Site-Chat is architected to serve two distinct audiences. For individual users (B2C), it's a web application to discover and participate in conversations across the internet. For businesses (B2B), it's a powerful SaaS tool to enhance their digital properties, creating a vibrant, interactive layer over their existing content."
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