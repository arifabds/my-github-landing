'use client'; 
import Link from 'next/link';
import FeatureSection from '@/components/FeatureSection';
import { useEffect } from 'react';
import HomeButton from '@/components/HomeButton';

export default function ContentGeneratorPage() {

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
    <main className="relative min-h-screen bg-gradient-to-b from-[#111c2e] to-[#1d3a5f] text-white font-sans overflow-x-hidden scroll-smooth">

      <HomeButton />
      {/* Hero Section */}
      <section className="h-[95vh] relative flex flex-col items-center justify-center text-center p-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI-Powered Content Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            This is a placeholder for a catchy subtitle. Explain what your Chrome Extension does in one powerful sentence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://chromewebstore.google.com/detail/llm-based-content-generat/cpngfebnonodehhbnjmcjdjhbfjjgikb"
              target="_blank" rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition-transform hover:scale-105"
            >
              Add to Chrome - It's Free
            </a>
            <a 
              href="https://github.com/arifabds/LLM_Integrated_Chrome_Extension" 
              target="_blank" rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-gray-700/50 rounded-lg font-semibold hover:bg-gray-600/70 transition-transform hover:scale-105" 
            >
              View on GitHub
            </a>
          </div>
        </div>

        <a id="scroll-to-features" href="#features" className="absolute bottom-8 cursor-pointer">
          <svg className="w-10 h-10 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </section>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-8">
        <FeatureSection
          imageSide="left"
          imageUrl="/images/ss_1.png"
          title="Intelligent Content, Instantly"
          description="Turn any webpage into your personal content assistant. My Chrome extension analyzes the information on any site you visit and generates original content—like product descriptions, blog drafts, or social media posts—in seconds. From dense articles to cluttered product pages, it transforms information into well-structured text, accelerating your creative process and saving you valuable time."
        />

        <FeatureSection
          imageSide="right"
          imageUrl="/images/ss_2.png"
          title="A Resilient Architecture That Bypasses Obstacles"
          description="Modern websites often deploy sophisticated protections to block automated data scraping. To overcome this, I designed a dual-mode data fetching architecture that intelligently switches to a client-side approach when a standard server-side request fails. This hybrid system ensures the extension operates reliably even on the most protected sites, delivering a seamless user experience under any condition."
          imageStyle={{ width: '70%', margin: '0 auto' }}
        />

        <FeatureSection
          imageSide="left"
          imageUrl="/images/ss_3.png"
          title="More Than a Tool, It's an Analysis Platform"
          description="What's the best way to get a high-quality AI output? Is it speed or accuracy? To answer this, I used the extension as an A/B testing platform, comparing different AI architectures (standard vs. RAG) across dozens of scenarios. I objectively measured the results using an advanced LLM-as-a-Judge methodology—essentially, using another AI as an impartial referee. This analysis proved that there is no 'one-size-fits-all' solution; the optimal strategy depends on the task, providing a data-driven roadmap for choosing the best AI approach."
          imageCaption="Evaluator Harmony Analysis (GPT Score vs. Gemini Score): This violin plot shows the score difference between two LLM evaluators across different RAG architectures, revealing the consistency and bias of each judge."
        />
      </div>

      {/* Footer Section */}
      <footer className="text-center p-8 mt-16 border-t border-white/10">
        <div className="container mx-auto">
          <p className="mb-4">© 2025 All rights reserved.</p>
          <nav className="flex justify-center gap-6">
            <Link href="/content-generator/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/content-generator/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Back to Home</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}