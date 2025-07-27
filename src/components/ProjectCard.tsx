'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  imageSide: 'left' | 'right';
};

export default function ProjectCard({ title, description, imageUrl, tags, liveUrl, githubUrl, imageSide }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${animationClasses} flex flex-col md:flex-row gap-8 items-center my-12`}
    >
      <div className={`w-full md:w-1/2 ${imageSide === 'left' ? 'md:order-1' : 'md:order-2'}`}>
        <a href={liveUrl || githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl w-full h-auto transition-transform duration-300 hover:scale-105" />
        </a>
      </div>
      <div className={`w-full md:w-1/2 ${imageSide === 'left' ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-700/50 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:underline">
              Live Demo
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-white transition-colors">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}