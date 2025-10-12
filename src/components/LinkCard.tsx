type LinkCardProps = {
  href: string;
  text: string;
  glowColor?: 'cyan' | 'purple' | 'green'| 'lavender'| 'orange';
};

export default function LinkCard({ href, text, glowColor = 'cyan' }: LinkCardProps) {
  const colorVariants = {
    cyan: 'hover:shadow-cyan-500/30 hover:border-cyan-500/30',
    purple: 'hover:shadow-purple-500/30 hover:border-purple-500/30',
    green: 'hover:shadow-green-500/30 hover:border-green-500/30',
    lavender: 'hover:shadow-violet-400/20 hover:border-violet-400/20',
    orange: 'hover:shadow-orange-500/30 hover:border-orange-500/30',
  };

  const baseClasses = `
    block w-full p-4 my-4 text-center text-lg bg-white/10 rounded-lg 
    backdrop-blur-sm border border-transparent transition-all duration-300 
    ease-in-out hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg
  `;

  return (
    <a
      href={href}
      className={`${baseClasses} ${colorVariants[glowColor]}`}
    >
      {text}
    </a>
  );
}