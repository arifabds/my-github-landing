import Link from 'next/link';

export default function HomeButton() {
    return (
      <Link 
        href="/" 
        className="absolute top-6 left-6 z-10 p-2 bg-white/10 rounded-full backdrop-blur-sm 
                   text-white/60 transition-all duration-300 ease-in-out
                   hover:bg-white/20 hover:text-white hover:scale-110"
        aria-label="Back to Home"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
      </Link>
    );
  }