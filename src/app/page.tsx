import LinkCard from "@/components/LinkCard";
export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-4 font-sans">
      <div className="w-full max-w-md p-8 bg-white/5 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 text-center animate-fade-in-up">
        
        <h1 className="text-3xl font-bold mb-8">
          Welcome to My GitHub Pages
        </h1>
        
        <LinkCard 
            href="/portfolio" 
            text="🧑‍💻 Personal Portfolio" 
            glowColor="lavender"
        />

        <LinkCard 
              href="/content-generator"
              text="✨ LLM Content Generator (Chrome Extension)" 
              glowColor="cyan" 
        />

        <LinkCard 
            href="/proposal-management" 
            text="💼 LLM Proposal Management System" 
            glowColor="purple" 
        />

        <LinkCard 
            href="/remote-assistant" 
            text="🤖 LLM Remote Assistant (In Progress)" 
            glowColor="green" 
        />

      </div>
    </main>
  );
}