// src/app/remote-assistant/page.tsx

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import FeatureSection from '@/components/FeatureSection';
import HomeButton from '@/components/HomeButton';

export default function RemoteAssistantPage() {

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
    <main className="relative min-h-screen bg-gradient-to-b from-[#0F2027] to-[#203A43] text-white font-sans overflow-x-hidden scroll-smooth">
      <HomeButton />
      {/* Hero Section */}
      <section className="h-[95vh] relative flex flex-col items-center justify-center text-center p-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            LLM Remote Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            This is a placeholder for a catchy subtitle. Explain how this app controls a PC remotely using natural language commands.
          </p>
          <a
            href="https://github.com/arifabds/LLM-Remote-Assistant"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition-transform hover:scale-105"
          >
            View on GitHub (In Progress)
          </a>
        </div>

        <a id="scroll-to-features" href="#features" className="absolute bottom-8 cursor-pointer">
          <svg className="w-10 h-10 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </section>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-8">
        <FeatureSection
          imageSide="left"
          imageUrl="https://placehold.co/600x400/0F2027/FFF?text=Dynamic+Execution"
          title="True Dynamic Execution"
          description="Instead of relying on a limited set of pre-defined commands, this assistant's core logic is truly dynamic. The LLM interprets the user's natural language request and generates executable Python scripts in real-time. This groundbreaking approach allows for an almost limitless combination of actions, turning complex, multi-step tasks into simple commands."
        />
        <FeatureSection
          imageSide="right"
          imageUrl="https://placehold.co/600x400/379683/FFF?text=Security+Fortress"
          title="Security by Design: A Three-Layered Approach"
          description="Executing dynamically generated code presents significant security challenges. To address this, I designed a robust, three-layered security architecture. The first layer is a highly restrictive system prompt for the primary LLM. Before execution, the script is then vetted by a secondary AI safety model. Finally, the code is run within an isolated sandbox environment, preventing any access to critical system files or unauthorized network activity."
        />
        <FeatureSection
          imageSide="left"
          imageUrl="https://placehold.co/600x400/203A43/FFF?text=Cross-Platform"
          title="Seamless Cross-Platform Control"
          description="The system's architecture is designed for true accessibility, consisting of two core components: a cross-platform mobile client (built with React Native/Flutter) serving as the command center, and a lightweight Python agent running on the host PC. This decoupled design ensures a seamless and responsive experience, allowing you to securely control your machine from anywhere, on any modern smartphone."
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