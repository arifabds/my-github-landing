type SkillIconProps = {
    name: string;
    children: React.ReactNode;
  };
  
  export default function SkillIcon({ name, children }: SkillIconProps) {
    return (
      <div className="flex flex-col items-center gap-2 group">
        <div className="w-20 h-20 bg-slate-800/50 rounded-lg flex items-center justify-center 
                        transition-all duration-300 group-hover:bg-slate-700/50 group-hover:scale-110">
          {children}
        </div>
        <span className="text-sm text-slate-400 transition-all duration-300 group-hover:text-white">
          {name}
        </span>
      </div>
    );
  }