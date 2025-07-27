export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] text-white p-4 sm:p-8 font-sans">
      <div className="w-full max-w-3xl mx-auto p-8 md:p-12 bg-white/5 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 border-b-2 border-cyan-500/50 pb-2">
          Privacy Policy
        </h1>
        <p className="mt-4"><strong className="font-semibold text-white">Last Updated:</strong> 04.06.2025</p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">1. What Data Do We Collect?</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          We collect only necessary information such as user prompts, model responses, and page content. If you register, we store your email address and securely hashed password for authentication. Your generated content and query history are also stored under your account.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">2. Purpose of Data Usage</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          Collected data is used to generate relevant content based on user input. If you're logged in, your generation history is saved for your personal access and improvement of your workflow. No personal data is shared with third parties.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">3. Data Storage and Security</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          All transfers are encrypted via HTTPS. If registered, your data is securely stored in Supabase. Passwords are encrypted with industry-standard bcrypt hashing and never stored in plain text.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">4. User Rights and Choices</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          You may use the extension without creating an account. If registered, you may contact us to permanently delete your account and all associated data at any time.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">5. Third-Party Services</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          We use GroqCloud and HuggingFace APIs to generate content. Only the necessary prompt information is shared with these APIs; no personal identifiers are sent.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">6. Changes and Updates</h2>
        <p className="text-base text-gray-300 leading-relaxed">
          This policy may be updated from time to time. All changes will be reflected here and optionally announced inside the extension UI.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">7. Contact</h2>
        <p className="text-base text-gray-300 leading-relaxed">For any questions or deletion requests, please contact:</p>
        <p className="text-base text-gray-300 leading-relaxed">
          <strong>Email:</strong> arifabdusoglu0016@gmail.com
        </p>
        <p className="text-base text-gray-300 leading-relaxed">
          <strong>Website:</strong> <a href="https://arifabds.github.io/portfolio" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">https://arifabds.github.io/portfolio</a>
        </p>
        <p className="text-base text-gray-300 leading-relaxed">
          <strong>Extension:</strong> <a href="https://chromewebstore.google.com/detail/llm-based-content-generat/cpngfebnonodehhbnjmcjdjhbfjjgikb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">LLM Based Content Generator</a>
        </p>

        <div className="mt-12 pt-4 border-t border-white/10 text-center text-sm text-gray-400">
          © 2025 All rights reserved.
        </div>
      </div>
    </main>
  );
}