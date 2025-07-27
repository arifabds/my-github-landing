export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] text-white p-4 sm:p-8 font-sans">
      <div className="w-full max-w-3xl mx-auto p-8 md:p-12 bg-white/5 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b-2 border-cyan-500/50 pb-2">
          Terms of Use
        </h1>
        <p className="mt-4"><strong className="font-semibold text-white">Last Updated:</strong> 04.03.2025</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">1. Usage Guidelines</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          You agree to use our services only for lawful purposes and in accordance with these terms.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">2. Intellectual Property</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          All content and materials provided by this extension are the intellectual property of the company and protected by copyright laws.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">3. Limitation of Liability</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">4. Contact Us</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          If you have any questions about these Terms of Use, please contact us at <a href="mailto:arifabdusoglu0016@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">arifabdusoglu0016@gmail.com</a>.
        </p>

        <p className="text-base text-gray-300 leading-relaxed">
          <strong>Extension Link:</strong> <a href="https://chromewebstore.google.com/detail/llm-based-content-generat/cpngfebnonodehhbnjmcjdjhbfjjgikb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">LLM Based Content Generator Chrome Extension</a>
        </p>
        
        <div className="mt-12 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © 2025 All rights reserved.
        </div>
      </div>
    </main>
  );
}